import * as Danfo from 'danfojs';

const Plotter = ({datasetUrl, userSelectedVariables, userSelectedPlot}) => {

    function renderPlot() {
        switch(userSelectedPlot) {
            case 'line' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").line({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );

            case 'bar' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").bar({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );    
            
            case 'scatter' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").scatter({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );
            
            case 'histogram' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").histogram({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );

            case 'table' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            var header = {
                                align: "center",
                                fill: { color: ['gray'] },
                                font: { family: "Arial", size: 15, color: "white" }
                            }
                            var cell = {
                                align: ["center"],
                                line: { color: "black", width: 1}
                            }
                            dataFrame.plot("current-plot-container").table({header_style: header, cell_style: cell});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );
            
            case 'box' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").box({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );

            case 'violin' :
                return (
                    Danfo.read_csv(datasetUrl)
                        .then(dataFrame => {
                            dataFrame.plot("current-plot-container").violin({columns: userSelectedVariables});
                        })
                        .catch(e => {
                            console.error(e);
                        })
                );
            
            case 'time' :
                return (
                    <div>
                        <div id="time-plot-container"></div>
                        {
                            Danfo.read_csv(datasetUrl)
                            .then(dataFrame => {
                                dataFrame.plot("time-plot-container").time({columns: userSelectedVariables});
                            })
                            .catch(e => {
                                console.error(e)
                            })
                        }
                    </div>   
                );

            default :
                return null;
        }
    }

    return (
        <div className="current-plot-container" id="current-plot-container">
            {renderPlot}
        </div>
    )
};

export default Plotter;