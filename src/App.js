import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <header>
        <h1 className="centered">GIF Search</h1>
        <p>Powered By GIPHY</p>
      </header>
      <Search setResults={setResults} />
      <Results data={results} />
    </div>
  );
};

export default App;
