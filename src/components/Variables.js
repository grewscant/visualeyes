import { useState, useEffect } from 'react';
import './styles/Variables.css'

const Variables = ({ dataFrame, onPlotButtonClick }) => {
  const [variables, setVariables] = useState([]);
  const [checkedVariables, setCheckedVariables] = useState([]);

  useEffect(() => {
    setVariables(dataFrame.columns);
  }, [dataFrame]);

  function changeHandler(event, variable) {
    if (event.target.checked) {
      setCheckedVariables([...checkedVariables, variable]);
    } else {
      setCheckedVariables(
        checkedVariables.filter(checked => variable !== checked)
      );
    }
  }

  return (
    <div className="variable-container">
      {variables.map((variable, index) => {
        return (
          <div className="variable-name-ctn" key={index}>
            <input
              type="checkbox"
              className="dataset-variable-name"
              onChange={event => changeHandler(event, variable)}
            />
            <span className="variable-label">{variable}</span>
          </div>
        );
      })}
      <button
        className="confirm-selection"
        onClick={() => onPlotButtonClick(checkedVariables)}>Plot it ✏️</button>
    </div>
  );
};

export default Variables;
