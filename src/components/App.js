import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Danfo from 'danfojs/src/index';
import './styles/App.css';

import Visualizer from './Visualizer';

function App() {
  function onInputSubmit(e) {
    const datasetUrl = e.target.value;
    validateUrlAndSetState(datasetUrl);
  }

  function validateUrlAndSetState(datasetUrl) {
    Danfo.read_csv()
      .then(dataFrame => {
        // The URL is correct and has no issues.
        // Proceed to set global state here.
        // Eg. setDatasetUrl(dataFrame)
        // - Note that the URL doesn't need to be passed now.
        // - The globalState can be set with the received DataFrame.
        // - This state can then be used by the Visualizer Component.
        // - This way we have isolated Visualizer and it only does what it says.
      })
      .catch(e => {
        // The URL has some kind of issue.

        // TODO: Custom logic to display error to the user.
        // Alerts are not a good way to do so.
        // Until a proper way is decided to do so, the error should pnly be logged.
        console.error(e);
      });
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1 className="title">Paste your dataset's URL here</h1>

            <input type="text" onSubmit={onInputSubmit} />
          </div>
        </Route>
        <Route path="/visualizer">
          <Visualizer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
