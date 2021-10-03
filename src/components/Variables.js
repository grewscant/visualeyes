import * as Danfo from 'danfojs/dist/index';
import { useState, useEffect } from 'react';

const Variables = ({ datasetUrl }) => {
    const [variables, setVariables] = useState([]);

    useEffect(() => {
        Danfo.read_csv(datasetUrl)
            .then(DataFrame => {
                setVariables(DataFrame.columns);
            })
            .catch(error => {
                console.log(error);
            });
    }, [datasetUrl]);

    return (
        <div className="variable-container">
            {variables.map(variable => {
                return (
                    <div>
                        <br />
                        <input type="checkbox" className="dataset-variable-name" />
                        {variable}
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Variables;