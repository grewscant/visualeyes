import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import './styles/App.css';

import Visualizer from './Visualizer';

const App = () => {
  const [dataFrame, setDataFrame] = useState();
  const [datasetUrl, setDataSetUrl] = useState();

  function onReceiveDatasetUrl(dataFrame, datasetUrl) {
    setDataFrame(dataFrame);
    setDataSetUrl(datasetUrl);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home onDatasetFetchComplete={onReceiveDatasetUrl} />
        </Route>
        <Route path="/visualizer">
          <Visualizer 
            dataFrame={dataFrame} 
            datasetUrl={datasetUrl}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
