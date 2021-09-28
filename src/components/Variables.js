import DF from "danfojs-node";

const Variables = (dataset) => {

    function getVariables() {
        DF.read_csv(dataset)
        .then(df => {
            return df.columns;
        }).catch(e => {
            //prettify error
        });
    }

    return (
        <div className="variable-container">
            {getVariables.map((value) => {
                return <label>
                <input type="checkbox" className="dataset-column-name" />{value}<br />
                </label>;
            })}
        </div>
    )
}

export default Variables;