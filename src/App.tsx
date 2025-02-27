import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import "./styles/fonts.css";
import Home from "./pages/Home/Home.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";
import Login from "./pages/Login/Login.tsx";
import Layout from "./pages/Layout/Layout.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import Sections from "./pages/Sections/Sections.tsx";
import Brands from "./pages/Brands/Brands.tsx";
import Collections from "./pages/Collections/Collections.tsx";
import Products from "./pages/Products/Products.tsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/catalog"
              element={<Navigate to="/catalog/sections" replace />}
            />
            <Route path="/catalog" element={<Catalog />}>
              <Route path="sections" element={<Sections />} />
              <Route
                path="sections/:id"
                element={<Products type="sections" />}
              />
              <Route path="brands" element={<Brands />} />
              <Route path="brands/:id" element={<Products type="brands" />} />
              <Route path="collections" element={<Collections />} />
              <Route path="*" element={<Sections />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
