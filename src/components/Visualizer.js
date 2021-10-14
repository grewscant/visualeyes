import './styles/Visualizer.css';
import Variables from './Variables';
import Plots from './Plots';

const Visualizer = ({ datasetUrl }) => {
  return (
    <div className="wrapper">
      <div className="dataset-container">
        <h1 className="title">Dataset</h1>
        <div className="attribute-container">
          <Variables 
            datasetUrl='https://raw.githubusercontent.com/vincentarelbundock/Rdatasets/master/csv/datasets/airquality.csv'
            plotType='series' 
          />
        </div>
      </div>
      <div className="vis-container">
        <h1 className="title">Visualization</h1>
        <div className="vis-btn-container">
          <Plots />
        </div>
        <div className="vis-plot-container"></div>
      </div>
    </div>
  );
};

export default Visualizer;
