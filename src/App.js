import './App.css';

// Importing Components

import Header from "./Components/Header";
import {GlobalStatistic} from "./Components/GlobalStatistic";

function App() {
  return (
    <div className="App">
      <Header/>
      <GlobalStatistic/>
    </div>
  );
}

export default App;
