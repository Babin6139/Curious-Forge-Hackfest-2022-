import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import RegistrationRequestForm from './pages/registration-request';
import Layout from './components/layout.js';
import AssetDescription from './pages/asset-description';
import ListUsers from './pages/view-users';
import Dashboard from './pages/dashboard';
import Transfer from "./pages/transfer"
import MintNft from './pages/mint-nft';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route
              path="/register"
              element={<RegistrationRequestForm />}
            ></Route>
            <Route
              path="/asset-description"
              element={<AssetDescription />}
            ></Route>
            <Route path="/admin/list-users" element={<ListUsers />}></Route>
            <Route path="/mint-nft" element={<MintNft/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
