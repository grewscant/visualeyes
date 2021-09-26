import { useHistory } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  const history = useHistory();

  const onInputChange = e => {
    try {
      validateInputFile(e);
    } catch (err) {
      alert(err);
    }
  };

  function validateInputFile(e) {
    let inputFile = e.target.files[0];

    if (!inputFile.type === 'text/csv') {
      throw Error('Please drop only CSVs');
    } else {
      navigateToVisualizer();
    }
  }

  function navigateToVisualizer() {
    history.push('/visualizer');
  }

  return (
    <div id="container">
      <input
        type="file"
        id="dataset"
        accept=".csv,text/csv"
        onChange={onInputChange}
      />
      <div id="dropzone">
        <h1 className="title">Drag &amp; Drop Your Dataset</h1>
      </div>
    </div>
  );
};

export default Home;
