import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StoryList from "./component/StoryList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">Hacker News</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Top</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/best">Best</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/new">New</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/best">
            <StoryList filter="best" />
          </Route>
          <Route path="/new">
            <StoryList filter="new" />
          </Route>
          <Route path="/">
            <StoryList filter="best" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
