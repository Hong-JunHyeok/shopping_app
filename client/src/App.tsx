import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./components/product/ProductContext";

import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPurchasePage from "./pages/ProductPurchasePage";
import ShoppingBasketPage from './pages/ShoppingBasketPage';
import NotFoundPage from "./pages/NotFouncPage";

import Layout from "./components/shared/Layout";

function App() {
  return (
    <ProductProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/purchase" element={<ProductPurchasePage />} />
          <Route path="/shopping-basket" element={<ShoppingBasketPage />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Layout>
    </ProductProvider>
  );
}

export default App;
