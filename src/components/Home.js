import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import * as Danfo from 'danfojs/dist/index';
import { Errors } from '../Constants';
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
    <div className="home">
      <h1 className="main-title">Visualeyes</h1>
      <p className="main-desc">A UI so simple, your eyes will want to thank you</p>
      <input type="text" ref={datasetUrlInput} />
      <button className="btn-lets-go" onClick={onButtonClick}>Let's go &nbsp; 📊</button>
    </div>
  );
};

export default Home;
