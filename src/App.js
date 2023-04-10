import './App.css';
import { BrowserRouter as Router,Route,Routes } from'react-router-dom';
import ResumeComponent from './components/ResumeComponent/ResumeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ResumeComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
