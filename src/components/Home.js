// This file has been temporarily deprecated.
// Will be used if required.

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
    // TODO: Write logic here or delete this component
    <div></div>
  );
};

export default Home;
