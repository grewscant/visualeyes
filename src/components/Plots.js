import { useState } from 'react';

const Plots = () => {
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

  const availablePlotTypes = [
    {
      type: 'series',
      desc: 'Series Plot'
    },
    {
      type: 'dataframe',
      desc: 'DataFrame Plot'
    }
  ];

  const [selectedPlot, setSelectedPlot] = useState('line');
  const [selectedPlotType, setSelectedPlotType] = useState('series');

  return (
    <div className="all-plots-container">
      {availablePlotTypes.map(plot => {
        return (
          <div className="plot-type-btn">
            <input
              type="radio"
              name="vis-type-select"
              id={plot.type}
              checked={selectedPlotType === plot.type}
              onClick={() => setSelectedPlotType(plot.type)}
            />
            <label htmlFor={plot.type}>{plot.desc}</label>
          </div>
        );
      })}
      <br /><br />
      {availablePlots.map(plot => {
        return (
          <div className="plot-btn">
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
