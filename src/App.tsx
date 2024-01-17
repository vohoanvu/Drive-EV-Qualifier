import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EligibilityFormComponent from './components/EligibilityFormComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  const [eligibilityResult, setEligibilityResult] = useState({
    isEligible: false,
    message: '',
    rebateAmount: 0
  });

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route
              path="/" 
              element={
                <EligibilityFormComponent setEligibilityResult={setEligibilityResult} />
              } 
            />
            <Route
              path="/result" 
              element={<ResultComponent {...eligibilityResult} />} 
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */
