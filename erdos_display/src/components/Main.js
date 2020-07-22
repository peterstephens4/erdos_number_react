import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Input, Button, Grid } from 'semantic-ui-react';
import { ForceGraphContainer } from './ForceGraphContainer';
import './Main.css';

let authors = [];

export function Main(auth) {
    const [author, setAuthor] = useState('');
    authors = auth.authors;

    const clearAuthor = (event) => {
        setAuthor('');
    }

    return (
        <div>
            <Grid >
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="Main-header">
                            <p>Erdos Number 1 Collaboration Graph Display </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Button size='big'>
                            <Link to="/about">About</Link>
                        </Button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <div>
                            <Input  id='authorSelection' 
                                    list='authors' 
                                    placeholder='Choose author...' 
                                    size='large'
                                    onChange={event => setAuthor(event.target.value)}
                                    value={author}
                            />
                            <datalist id='authors'>
                                {makeOptionList(authors.nodes)}
                            </datalist>
                            <Button size='large' onClick={clearAuthor}>Clear</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row >
                    <Grid.Column>
                        <div className="Main-GraphArea" style={{border:'1px solid gray', width: '95%', float: 'none', margin: '0 auto', overflow: 'auto'}}>
                            <ForceGraphContainer author={author} 
                                                 authors={authors} />
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    );
}

function makeOptionList(nodes) {
    let buffer = [];
    if(nodes){
        for(let i=0; i<nodes.length; i++) {
            buffer.push(<option value={nodes[i].name} key={nodes[i].name}/>);
        }
    }
    return(buffer);
}
