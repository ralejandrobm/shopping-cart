import Header from "./components/header";
import CatCarr from "./components/catCarr";
import ProductsProvider from "./contex/products";
import {  BrowserRouter } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <Header></Header>
          <CatCarr></CatCarr>
        </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
