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
      <p className="main-desc">
        A UI so simple, your eyes will want to thank you.
      </p>
      <svg
        width="694"
        height="649"
        viewBox="0 0 694 649"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 227.653L338.509 384.039V296.195L100.711 194.246V189.794L338.509 87.8443V0.000244141L0 156.387V227.653Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
        <path
          d="M0 358.306L338.509 514.692V426.848L100.711 324.899V320.446L338.509 218.497V130.653L0 287.04V358.306Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
        <path
          d="M0 492.443L338.509 648.828V560.985L100.711 459.036V454.583L338.509 352.634V264.79L0 421.177V492.443Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
        <path
          d="M693.884 156.386L355.375 0.00013469V87.844L593.173 189.793V194.246L355.375 296.195V384.039L693.884 227.652V156.386Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
        <path
          d="M693.884 287.038L355.375 130.652V218.496L593.173 320.445V324.898L355.375 426.847V514.691L693.884 358.304V287.038Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
        <path
          d="M693.884 421.175L355.375 264.789V352.633L593.173 454.582V459.035L355.375 560.984V648.828L693.884 492.441V421.175Z"
          fill="#F71FFC"
          fillOpacity="0.05"
        />
      </svg>
      <input type="text" ref={datasetUrlInput} placeholder="🔗 Paste your awesome URL here"/>
      <button className="btn-lets-go" onClick={onButtonClick}>
        Let's go&nbsp;🚀
      </button>
    </div>
  );
};

export default Home;
