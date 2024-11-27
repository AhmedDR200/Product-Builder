import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { MyModal } from "./components/ui/Model";
import { productList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  // ** States
  const [isOpen, setIsOpen] = useState(false);

  // ** Handlers
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // ** Renders
  const renderProductList = productList.map((prod) => (
    <ProductCard key={prod.id} prod={prod} />
  ));
  return (
    <main className="container">
      <Button className="p-2 w-full rounded-md text-black bg-indigo-600" 
      onClick={open}
      >
        Add
      </Button>
      <div className="bg-indigo-500 m-5 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <div>
        <MyModal isOpen={isOpen} close={close} title="TEST">
          <div className="flex items-center space-x-3">
            <Button className="p-2 w-full rounded-md text-black bg-indigo-600 hover:bg-indigo-500 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Submit
            </Button>
            <Button className="p-2 w-full rounded-md text-black bg-red-500 hover:bg-red-400 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Cancel
            </Button>
          </div>
        </MyModal>
      </div>
    </main>
  );
};

export default App;
