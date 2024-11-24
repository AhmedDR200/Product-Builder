import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  // ** Renders
  const renderProductList = productList.map((prod) => (
    <ProductCard key={prod.id} prod={prod} />
  ));
  return (
    <div>
      <div className="bg-indigo-500 m-5 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2 rounded-md">
        {renderProductList}
      </div>
    </div>
  );
};

export default App;
