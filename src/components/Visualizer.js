import "./styles/Visualizer.css";

const Visualizer = ({ props }) => {
  return (
    <div className="wrapper">
      <div className="dataset-container">
        <h1 className="title">Dataset</h1>
        <div className="attribute-container">
          <input type="checkbox" className="dataset-column-name"/>
            Lorem.
          
          <br />
          <input type="checkbox" className="dataset-column-name"/>
            Earum.
          
          <br />
          <input type="checkbox" className="dataset-column-name"/>
            Expedita.
          
          <br />
          <input type="checkbox" className="dataset-column-name"/>
            Et.
          
          <br />
          <input type="checkbox" className="dataset-column-name"/>
            ipsum.
          
          <br />
        </div>
      </div>
      <div className="vis-container">
        <h1 className="title">Visualization</h1>
        <div className="vis-btn-container">
          <input type="radio" name="vis-select" id="vis-lorem" />
          <label htmlFor="vis-lorem">Lorem.</label>

          <input type="radio" name="vis-select" id="vis-asperiores" />
          <label htmlFor="vis-asperiores">Asperiores.</label>

          <input type="radio" name="vis-select" id="vis-ducimus" />
          <label htmlFor="vis-ducimus">Ducimus.</label>

          <input type="radio" name="vis-select" id="vis-adipisci" />
          <label htmlFor="vis-adipisci">Adipisci.</label>

          <input type="radio" name="vis-select" id="vis-maiores" />
          <label htmlFor="vis-maiores">Maiores.</label>
        </div>
        <div className="vis-plot-container"></div>
      </div>
    </div>
  );
};

export default Visualizer;
