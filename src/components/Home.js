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
    <div>
      <h1 className="title">Paste your dataset's URL here</h1>

      <input
        type="text"
        onSubmit={onInputChange}
      />
    </div>
  );
};

export default Home;
