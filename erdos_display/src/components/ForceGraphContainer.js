import React, { useEffect, useRef } from "react";
import { runForceGraph } from "./ForceGraphGenerator";
import styles from "./forceGraphContainer.module.css";

export function ForceGraphContainer({ author, authors }) {
  const containerRef = useRef(null);
    
  useEffect(() => {
    let destroyFn;
    if (containerRef.current) {
      const { destroy } = runForceGraph(containerRef.current, authors.links, authors.nodes, author);
      destroyFn = destroy;
    }

    return destroyFn;
  }, [author, authors]);

  return <div ref={containerRef} className={styles.container} />;
}
