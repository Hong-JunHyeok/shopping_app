import ProductCreateForm from "../components/product/ProductCreateForm";
import ProductList from "../components/product/ProductList";
import { ProductProvider } from "../components/product/ProductContext";

function MainPage() {
  return (
    <ProductProvider>
      <ProductCreateForm />
      <ProductList />
    </ProductProvider>
  );
}

export default MainPage;
