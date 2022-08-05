import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Appbar from './components/Appbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Appbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
