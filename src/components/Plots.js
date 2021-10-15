import { useState } from 'react';

const Plots = ({ onPlotChange }) => {

  const [selectedPlot, setSelectedPlot] = useState('line');

  onPlotChange(selectedPlot);

  const availablePlots = [
    {
      name: 'line',
      desc: 'Line Chart'
    },
    {
      name: 'bar',
      desc: 'Bar Chart'
    },
    {
      name: 'scatter',
      desc: 'Scatter Plot'
    },
    {
      name: 'histogram',
      desc: 'Histogram'
    },
    {
      name: 'pie',
      desc: 'Pie Chart'
    },
    {
      name: 'table',
      desc: 'Tables'
    },
    {
      name: 'box',
      desc: 'Box Plot'
    },
    {
      name: 'violin',
      desc: 'Violin Plot'
    },
    {
      name: 'time',
      desc: 'Time series'
    }
  ];

  return (
    <div className="all-plots-container">
      {availablePlots.map((plot, index) => {
        return (
          <div className="plot-btn" key={index}>
            <input
              type="radio"
              name="vis-select"
              id={plot.name}
              checked={selectedPlot === plot.name}
              onClick={() => setSelectedPlot(plot.name)}
            />
            <label htmlFor={plot.name}>{plot.desc}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Plots;
