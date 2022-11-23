import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./components/product/ProductContext";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPurchasePage from "./pages/ProductPurchasePage";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:productId" element={<ProductDetailPage />} />
        <Route path="/purchase/:productId" element={<ProductPurchasePage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
