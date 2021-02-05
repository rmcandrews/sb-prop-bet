import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Entry from "./components/Entry/Entry";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/entry">
            <Entry />
          </Route>
          <Route path="/">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
