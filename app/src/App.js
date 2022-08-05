import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Appbar from './components/Appbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Router>
            <Route path='/' element={<Appbar/>}/>
        </Router>
      </Routes>
    </div>
  );
}

export default App;
