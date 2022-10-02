import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:productId" element={<ProductDetailPage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
