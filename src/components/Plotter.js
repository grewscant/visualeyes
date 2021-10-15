const Plotter = ({ dataFrame, userSelectedVariables, userSelectedPlot }) => {

    //dataFrame.plot('current-plot-container').bar()

//   function renderPlot() {
//     switch (userSelectedPlot) {
//       case 'test':
//         return () => {
//           dataFrame.plot('current-plot-container').line();
//         };

//       case 'line':
//         return () => {
//           dataFrame.plot('current-plot-container').line();
//         };

//       case 'bar':
//         return () => {
//           dataFrame
//             .plot('current-plot-container')
//             .bar({ columns: userSelectedVariables });
//         };

//       case 'scatter':
//         return () => {
//           dataFrame
//             .plot('current-plot-container')
//             .scatter({ columns: userSelectedVariables });
//         };

//       case 'histogram':
//         return () => {
//           dataFrame
//             .plot('current-plot-container')
//             .histogram({ columns: userSelectedVariables });
//         };

//       case 'table':
//         return () => {
//           var header = {
//             align: 'center',
//             fill: { color: ['gray'] },
//             font: { family: 'Arial', size: 15, color: 'white' }
//           };
//           var cell = {
//             align: ['center'],
//             line: { color: 'black', width: 1 }
//           };

//           dataFrame
//             .plot('current-plot-container')
//             .table({ header_style: header, cell_style: cell });
//         };

//       case 'box':
//         return () => {
//           dataFrame
//             .plot('current-plot-container')
//             .box({ columns: userSelectedVariables });
//         };

//       case 'violin':
//         return () => {
//           dataFrame
//             .plot('current-plot-container')
//             .violin({ columns: userSelectedVariables });
//         };

//       case 'time':
//         return () => {
//           dataFrame
//             .plot('time-plot-container')
//             .time({ columns: userSelectedVariables });
//         };
//       default:
//         return () => {
//           dataFrame
//             .plot('time-plot-container')
//             .line({ columns: userSelectedVariables });
//         };
//     }
//   }

//   renderPlot()();

  console.log('Plotter dataframe is', dataFrame);

  return (
    <div className="current-plot-container" id="current-plot-container"></div>
  );
};

export default Plotter;
