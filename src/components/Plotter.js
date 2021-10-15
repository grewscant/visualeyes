import * as Danfo from 'danfojs/dist/index';

const Plotter = ({ datasetUrl, userSelectedVariables, userSelectedPlot }) => {

  function renderPlot() {
    switch (userSelectedPlot) {
      case 'line' : 
        return (
            Danfo.read_csv(datasetUrl)
              .then(df => {
                df.plot('current-plot-container').line({ columns: userSelectedVariables });
              })
              .catch(e => {
                console.log(e);
              })
        );
        
      case 'scatter':
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              df.plot('current-plot-container').scatter({ columns: userSelectedVariables });
            })
            .catch(e => {
              console.log(e);
            })
        )

      case 'histogram':
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              var layout = {
                bargap: 0,
                bargroupgap: 0.1,
                barmode: "stack"
              }

              df.plot('current-plot-container').hist({ columns: userSelectedVariables, layout: layout });
            })
            .catch(e => {
              console.log(e);
            })
        )
        
      case 'table':
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              var header = {
                align: 'center',
                fill: { color: ['gray'] },
                font: { family: 'Arial', size: 15, color: 'white' }
              };
              var cell = {
                align: ['center'],
                line: { color: 'black', width: 1 }
              };
              df.plot('current-plot-container').table({ header_style: header, cell_style: cell});
            })
            .catch(e => {
              console.log(e);
            })
        )

      case 'box':
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              df.plot('current-plot-container').box({ columns: userSelectedVariables });
            })
            .catch(e => {
              console.log(e);
            })
        )

      case 'violin':
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              df.plot('current-plot-container').violin({ columns: userSelectedVariables });
            })
            .catch(e => {
              console.log(e);
            })
        )

      default:
        return (
          Danfo.read_csv(datasetUrl)
            .then(df => {
              df.plot('current-plot-container').line({ columns: userSelectedVariables });
            })
            .catch(e => {
              console.log(e);
            })
        )
    }
  }

  renderPlot();

  return (
    <div className="current-plot-container" id="current-plot-container"></div>
  );
};

export default Plotter;
