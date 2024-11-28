import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { MyModal } from "./components/ui/Model";
import { productList, formInputList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

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

  const renderFormInputs = formInputList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-800"
      >
        {input.label}
      </label>
      <Input type="text" id={input.id} />
    </div>
  ));
  return (
    <main className="container">
      <Button
        className="p-2 w-full rounded-md text-black bg-indigo-600"
        onClick={open}
      >
        Add
      </Button>
      <div className="bg-indigo-500 m-5 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <div>
        <MyModal isOpen={isOpen} close={close} title="Add Product">
          <div className="space-y-3">
            {renderFormInputs}
            <div className="flex items-center space-x-3">
              <Button className="p-2 w-full rounded-md text-black bg-indigo-600 hover:bg-indigo-500 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Submit
              </Button>
              <Button className="p-2 w-full rounded-md text-black bg-red-500 hover:bg-red-400 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Cancel
              </Button>
            </div>
          </div>
        </MyModal>
      </div>
    </main>
  );
};

export default App;
