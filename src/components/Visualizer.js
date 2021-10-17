  import './styles/Visualizer.css';
  import Variables from './Variables';
  import Plots from './Plots';
  import Plotter from './Plotter';
  import { useState, useEffect } from 'react';

  const Visualizer = ({ dataFrame, datasetUrl }) => {
    const [userSelectedPlot, setUserSelectedPlot] = useState('line');
    const [userSelectedVariables, setUserSelectedVariables] = useState([]);

    function onPlotChange(selectedPlot) {
      setUserSelectedPlot(selectedPlot);
    }

    function onPlotButtonClick(selectedVariables) {
      setUserSelectedVariables(selectedVariables);
    }

    useEffect(() => {
      if(userSelectedPlot.length > 0) {
        console.log(`Plot: ${userSelectedPlot}`);
      }
    }, [userSelectedPlot]); 

    useEffect(() => { 
      if(userSelectedVariables.length > 0) {
        console.log(`Variables: ${userSelectedVariables}`);
      }
    }, [userSelectedVariables]);

    return (
      <div className="wrapper">
        <div className="dataset-container">
          <h1 className="title">Dataset</h1>
          <div className="attribute-container">
            <Variables 
              dataFrame={dataFrame}
              onPlotButtonClick={onPlotButtonClick}
            />
          </div>
        </div>
        <div className="vis-container">
          <h1 className="title">Visualization</h1>
          <div className="vis-btn-container">
            <Plots 
              onPlotChange={onPlotChange}
            />
          </div>
          <div className="vis-plot-container">
            <Plotter
              datasetUrl={datasetUrl}
              userSelectedPlot={userSelectedPlot}
              userSelectedVariables={userSelectedVariables}
            />
          </div>
        </div>
        <p className="masthead">Made with ❤️ by Divya, Danyl, Gandharv & Mathew</p>
      </div>
    );
  };

  export default Visualizer;
