import * as Danfo from 'danfojs/dist/index';
import { useState, useEffect } from 'react';

const Variables = ({ datasetUrl, plotType }) => {
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
      setCheckedVariables([...checkedVariables, variable]);
    } else {
      setCheckedVariables((prev) => {
        prev.filter((curr) => curr.value !== variable.value);
      });
    }
  }

  return (
    <div className="variable-container">
      {variables.map(variable => {
        return (
          <div>
            <br />
            <input 
              type="checkbox" 
              className="dataset-variable-name" 
              onChange={(event) => changeHandler(event, variable)}
              disabled={plotType === 'series' && checkedVariables.length >= 2}
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
