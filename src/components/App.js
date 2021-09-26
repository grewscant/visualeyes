import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Home from './Home';
import Visualizer from './Visualizer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/visualizer">
          <Visualizer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
