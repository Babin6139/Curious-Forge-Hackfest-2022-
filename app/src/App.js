import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import RegistrationRequestForm from './pages/registration-request';
import Layout from './components/layout.js';
import AssetDescription from './pages/asset-description';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/request-registration"
              element={<RegistrationRequestForm />}
            ></Route>
            <Route
              path="/asset-description"
              element={<AssetDescription />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
