import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import api from './api';
import { Main } from "./components/Main";
import About from "./components/About";
import './App.css';

function App() {

  const [authors, setAuthors] = useState({});
  const loadData = async () => {
      const res = await api.getAllAuthors();
      setAuthors(await convertToJSON(res.data.data));
  };

  useEffect(() => {
      loadData();
      return () => {};
  }, []);
  
  const mainView = (props) => <Main {...props} authors={authors}/>
  const aboutView = (props) => <About {...props} />

  return (
    <div className = "AppContainer">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' render = {mainView} />
            <Route exact path='/about' render = {aboutView} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;

function convertToJSON(a) {
  let nodes = []
  let links = []

  for(let i=0; i<a.length; i++) {
      let name = a[i].name;
      let id = a[i].vertex;
      let group = a[i].degree;
      let pubs = a[i].colaborators;
      let adj = a[i].adj;
      let data = {
          "id": id,
          "name": name,
          "group": group,
          "pubs": pubs
      };
      nodes.push(data);

      for(let j=0; j<adj.length; j++) {
          let source = id;
          let target = adj[j];
          let value = pubs;
          let data = {
              "source": source,
              "target": target,
              "value": value,
          };
          links.push(data);
      }
  }

  let json = {
      'nodes': nodes,
      'links': links
  };
  return(json);
}

//  https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1/
//  https://oakland.edu/enp/