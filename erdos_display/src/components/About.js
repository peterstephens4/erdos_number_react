import React from 'react';
import { Grid } from 'semantic-ui-react';
import './About.css';

const About = () => (
        <div>
            <Grid columns='equal'>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="About-header">
                            <p>Erdos Number 1 Collaboration Information </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                  <Grid.Column></Grid.Column>
                  <Grid.Column width={10}>

                    <div>
                      <b>
                        <p>
                        The data I used is a subgraph of the collaboration graph induced by co-authors of the 
                        mathematician Paul Erdos.  
                        In other words, its vertices are people with Erdos Number 1, and two vertices are joined by an edge if they have 
                        published a joint paper (with or without other collaborators).  Paul Erdos (Erdos Number 0) and people with Erdos number 2
                        and higher are not included.
                        </p>

                        <p>
                        I choose this data because was a previously a working mathematician and I had always heard about the Erdos number. I wanted to try
                        to visualize this relationship between mathematicians.  Note that I have authored papers, but not with other mathematicians.  
                        So my Erdos number is said to be infinity.
                        </p>

                        <p>
                        In this visualization, when you hover over a node, you will find the mathematician’s name and the number of papers 
                        they have coauthored with mathematicians with Erdos number 2.  The more papers coauthored with Erdos number 2’s, the larger the 
                        node.  Note also that most of the authors with a lot of coauthors with Erdos number 2, seem to be clustered in the interior of 
                        the force graph.  Nodes in the interior of the graph have more links to other nodes in the graph (others with Erdos number 1).  
                        So these mathematicians would seem to drive collaboration within the discipline as they have authored papers with a wide range 
                        of other scholors.
                        </p>
                        <p>
                        This visualization also inculdes a search function where the user can either type in an authors name or select their name from the
                        dropdown list.  Once selected, the author's node will turn red in the display.  
                        </p>
                      </b>
                    </div>

                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column width={6}>
                        <table>
                          <tbody>
                              <tr>
                                  <td><b>Refference:</b></td>
                                  <td>&nbsp;&nbsp;</td>
                                  <td style={{textAlign:'left'}}><b><a href="https://www.oakland.edu/enp/thedata/">https://www.oakland.edu/enp/thedata/</a></b></td>
                              </tr>
                              <tr>
                                  <td></td>
                                  <td>&nbsp;&nbsp;</td>
                                  <td style={{textAlign:'left'}}><b><a href="https://files.oakland.edu/users/grossman/enp/erdos1graph.html">https://files.oakland.edu/users/grossman/enp/erdos1graph.html</a></b></td>
                              </tr>
                          </tbody>
                        </table>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column></Grid.Column>
                  <Grid.Column width={6}>
                      <b>The Erdos number has been a part of the folklore of mathematicians throughout the world for many years.  
                      To find out more about the Erdos number, see the following link:</b>
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                      <b><a href="https://oakland.edu/enp/">The Erdös Number Project</a></b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div>
                      <button>
                        <p><a href="/">Home</a> </p>
                      </button>
                    </div>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
);
export default About;