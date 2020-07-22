import * as d3 from "d3";

export function runForceGraph(container, linksData, nodesData, author) {

    d3.select("svg").remove();

    let links = [];
    if(linksData){
        links = linksData.map((d) => Object.assign({}, d));
    }
    
    let nodes = [];
    if(nodesData) {
        nodes = nodesData.map((d) => Object.assign({}, d));
    }

    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    const width = containerRect.width;

    const drag = (simulation) => {
    const dragstarted = (d) => {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };

    const dragged = (d) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    };

    const dragended = (d) => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    };

    return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    };

    const getNodeColor = (node) => {
        return node.name === author ? 'red' : '#0099ff'
    }

    const simulation = d3.forceSimulation(nodes)
                         .force("link", d3.forceLink(links).id(d => d.id))
                         .force("charge", d3.forceManyBody().strength(-150))
                         .force("x", d3.forceX())
                         .force("y", d3.forceY());

    const svg = d3.select(container)
                  .append("svg")
                  .attr("viewBox", [-width / 2, -height / 2, width, height])
                  .call(d3.zoom().on("zoom", function () {
                        svg.attr("transform", d3.event.transform);})
                  );

    const link = svg.append("g")
                    .attr("stroke", "#aaa")
                    .attr("stroke-opacity", 0.6)
                    .selectAll("line")
                    .data(links)
                    .join("line")
                    .attr("stroke-width", function(d) { return Math.sqrt(d.value) / 10; });

    const node = svg.append("g")
                    .attr("stroke", "#aaa")
                    .attr("stroke-width", 2)
                    .selectAll("circle")
                    .data(nodes)
                    .join("circle")
                    .attr("r", function(d) {
                        return Math.sqrt(d.pubs)*1.5;
                    })
                    .attr("fill", getNodeColor)
                    .call(drag(simulation));

    node.append("title")
        .text(function(d) {
            let dc = '';
            let name = ';'
            if (d.name.indexOf('*') !== -1) {
                name = d.name.replace('*', '');
                dc = ' (DECEASED)';
            }
            else {
                name = d.name;
            }
            name = name.concat(dc);
            let text = name.concat("\n ");
            text = text.concat(d.pubs);
            text = text.concat(" Coauthor(s) with Erdos number 2");
            return text;
    });

    simulation.on("tick", () => {
        //update link positions
        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        // update node positions
        node.attr("cx", d => d.x)
            .attr("cy", d => d.y);
    });

    return {
        destroy: () => {
            simulation.stop();
        },
        nodes: () => {
            return svg.node();
        }
    };
}

