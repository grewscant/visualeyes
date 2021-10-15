import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import './styles/App.css';

import Visualizer from './Visualizer';

const App = () => {
  const [dataFrame, setDataFrame] = useState();

  function onReceiveDatasetUrl(dataFrame) {
    setDataFrame(dataFrame);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home onDatasetFetchComplete={onReceiveDatasetUrl} />
        </Route>
        <Route path="/visualizer">
          <Visualizer dataFrame={dataFrame} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
