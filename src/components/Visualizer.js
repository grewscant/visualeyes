import './styles/Visualizer.css';
import Variables from './Variables';

const Visualizer = ({ props }) => {
  return (
    <div className="wrapper">
      <div className="dataset-container">
        <h1 className="title">Dataset</h1>
        <div className="attribute-container">
          <Variables />
        </div>
      </div>
      <div className="vis-container">
        <h1 className="title">Visualization</h1>
        <div className="vis-btn-container">
          <input type="radio" name="vis-select" id="vis-line" />
          <label htmlFor="vis-line">Line Chart</label>

          <input type="radio" name="vis-select" id="vis-bar" />
          <label htmlFor="vis-bar">Bar Chart</label>

          <input type="radio" name="vis-select" id="vis-scatter" />
          <label htmlFor="vis-scatter">Scatter Plot</label>

          <input type="radio" name="vis-select" id="vis-histogram" />
          <label htmlFor="vis-histogram">Histogram</label>

          <input type="radio" name="vis-select" id="vis-pie" />
          <label htmlFor="vis-pie">Pie Chart</label>

          <input type="radio" name="vis-select" id="vis-box" />
          <label htmlFor="vis-box">Box Plot</label>

          <input type="radio" name="vis-select" id="vis-violin" />
          <label htmlFor="vis-violin">Violin Plot</label>

          <input type="radio" name="vis-select" id="vis-time" />
          <label htmlFor="vis-time">Timeseries Plot</label>
        </div>
        <div className="vis-plot-container"></div>
      </div>
    </div>
  );
};

export default Visualizer;
