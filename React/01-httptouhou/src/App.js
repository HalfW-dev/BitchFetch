import React, {useState} from 'react';

import BitchList from './components/BitchList';
import './App.css';

function App() {
  const [bitches, setBitches] = useState([])

  function fetchBitchHandler () {
    fetch('https://touhou-api.herokuapp.com/stalker').then(response => {
      return response.json();
    }).then(data => {
      const transformedBitches = data.map(bitchData => {
        return {
          id: bitchData._id,
          name: bitchData.name,
          age: bitchData.age,
          description: bitchData.description
        }
      });
      setBitches(transformedBitches);
    });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchBitchHandler}>Fetch Bitches</button>
      </section>
      <section>
        <BitchList bitches={bitches} />
      </section>
    </React.Fragment>
  );
}

export default App;
