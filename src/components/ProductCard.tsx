import { IProduct } from "../interfaces/data";
import { textSlicer } from "../utils/functions";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface IProps {
  prod: IProduct;
}

const ProductCard = ({ prod }: IProps) => {
  const { imageURL, title, description, price, category } = prod;
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product image"
        clasName="rounded-md mb-2"
      />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-1">
        <span className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-slate-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-indigo-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-200 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt="category image"
          clasName="rounded-full mb-2 w-10 h-10 object-cover"
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button
          className=" bg-indigo-700"
          onClick={() => {
            console.log("Add to cart");
          }}
        >
          Add to cart
        </Button>
        <Button className=" bg-green-700">Buy now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
