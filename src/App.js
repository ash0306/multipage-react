import './App.css';
import { BrowserRouter as Router,Route,Routes } from'react-router-dom';
import ResumeComponent from './components/ResumeComponent/ResumeComponent';
import CalculatorComponent from './components/CalculatorComponent/CalculatorComponent';
import AxiosComponent from './components/AxiosComponent/AxiosComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ResumeComponent/>} />
          <Route path='/calculator' element={<CalculatorComponent/>}/>
          <Route path='/api' element={<AxiosComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
