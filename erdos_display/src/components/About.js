import React from 'react';
import { Grid } from 'semantic-ui-react';
import './About.css';

const About = () => (
        <div>
            <Grid >
                <Grid.Row>
                  <Grid.Column>
                  <div>
                      This file plots data the subgraph of the collaboration graph
                      induced by co-authors of Paul Erdos.  Its vertices are people
                      with Erdos number 1, and two authors are joined by an edge if
                      they have published a joint paper (with or without other collaborators).
                      Paul Erdos himself and people with Erdos number 2 are not included.
                  </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                      <div>
                            Refference:   https://www.oakland.edu/enp/thedata/
                                          https://files.oakland.edu/users/grossman/enp/erdos1graph.html
                      </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div>
                      <p>For more information on the Erdos Number Project see the following link...</p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div>
                      <p><a href="https://oakland.edu/enp/">The Erdös Number Project</a> </p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div>
                    <p><a href="/">Home</a> </p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
);
export default About;