import * as Danfo from 'danfojs/dist/index';
import { useState, useEffect } from 'react';

const Variables = ({ datasetUrl, plotType }) => {

  const MAX_VARIABLE_INPUT = 2;

  const [variables, setVariables] = useState([]);
  const [checkedVariables, setCheckedVariables] = useState([]);

  useEffect(() => {
    Danfo.read_csv(datasetUrl)
      .then(DataFrame => {
        setVariables(DataFrame.columns);
      })
      .catch(error => {
        console.log(error);
      });
  }, [datasetUrl]);

  function changeHandler(event, variable) {
    if(event.target.checked) {
      if(plotType === 'graph' && checkedVariables.length === MAX_VARIABLE_INPUT) {
        event.target.checked = false;
        return alert(`You can only select ${MAX_VARIABLE_INPUT} variables for a graph plot`)
      }
      setCheckedVariables([...checkedVariables, variable]);
    } else {
      setCheckedVariables((prev) => {
        prev.filter((curr) => curr.value !== variable.value);
      });
    }
  }

  return (
    <div className="variable-container">
      {variables.map((variable, index) => {
        return (
          <div key={index}>
            <br />
            <input 
              type="checkbox" 
              className="dataset-variable-name" 
              onChange={(event) => changeHandler(event, variable)}
            />
            {variable}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Variables;
