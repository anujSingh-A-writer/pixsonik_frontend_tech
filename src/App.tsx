import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Layout>
      <HomePage></HomePage>
      {/*Comment-out the above line and Uncomment the line below to see the product page */}
      {/* <ProductPage></ProductPage> */}
    </Layout>
  );
}

export default App;
