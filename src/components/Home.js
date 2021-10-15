import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import * as Danfo from 'danfojs/dist/index';
import { Errors } from '../Constants';
import './styles/App.css';

import './styles/Home.css';

const Home = ({ onDatasetFetchComplete }) => {
  const history = useHistory();
  const datasetUrlInput = useRef(null);

  function onButtonClick() {
    validateUrlAndSetState(datasetUrlInput.current.value);
  }

  function validateUrlAndSetState(datasetUrl) {
    Danfo.read_csv(datasetUrl)
      .then(dataFrame => {
        if (dataFrame.columns.length === 1) {
          throw new Error(Errors.BAD_URL);
        }
        onDatasetFetchComplete(dataFrame, datasetUrl);
        navigateToVisualizer();
      })
      .catch(e => {
        // Damn the custom logic to display error to the user
        // Just show an alert god damn it
        alert(e);
      });
  }

  function navigateToVisualizer() {
    history.push('/visualizer');
  }

  return (
    <div>
      <h1 className="title">Paste your dataset's URL here</h1>
      <input type="text" ref={datasetUrlInput} />
      <button onClick={onButtonClick}>Let's go</button>
    </div>
  );
};

export default Home;
