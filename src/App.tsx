import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { MyModal } from "./components/ui/Model";
import { productList, formInputList, colorsList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces/data";
import { productValidation } from "./validation";
import Err from "./components/Err";
import CircleColor from "./components/CircleColor";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  // ** States
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  // ** Handlers
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    console.log(errors);
    console.log(product);

    // check if there are any errors
    const hasErrorMsg =
      Object.values(errors).some((val) => val !== "") &&
      Object.values(product).every((val) => val !== "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
  };

  const cancelHandler = () => {
    console.log("cancel");
    setProduct(defaultProduct);
    close();
  };

  // ** Renders
  const renderProductList = productList.map((prod) => (
    <ProductCard key={prod.id} prod={prod} />
  ));

  const renderFormInputs = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-800"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <Err msg={errors[input.name]} />
    </div>
  ));

  const renderCircleColors = colorsList.map((color) => (
    <CircleColor key={color} color={color}/>
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
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputs}
            <div className="flex items-center flex-wrap space-x-1">{renderCircleColors}</div>
            <div className="flex items-center space-x-3">
              <Button className="p-2 w-full rounded-md text-black bg-indigo-600 hover:bg-indigo-500 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Submit
              </Button>
              <Button
                onClick={cancelHandler}
                className="p-2 w-full rounded-md text-black bg-red-500 hover:bg-red-400 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Cancel
              </Button>
            </div>
          </form>
        </MyModal>
      </div>
    </main>
  );
};

export default App;
