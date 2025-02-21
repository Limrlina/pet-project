import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/fonts.css';
import Home from './pages/Home/Home.tsx';
import Catalog from './pages/Catalog/Catalog.tsx';
import Login from './pages/Login/Login.tsx';
import Layout from './pages/Layout/Layout.tsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
