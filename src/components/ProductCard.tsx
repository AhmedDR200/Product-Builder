import { IProduct } from "../interfaces/data";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface IProps {
  prod: IProduct;
}

const ProductCard = ({ prod }: IProps) => {
  const { imageURL, title, description, price, category, colors } = prod;

  const renderCircleColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={title} clasName="rounded-md mb-2" />
      <h3 className="font-extrabold">{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center flex-wrap space-x-1">
        {renderCircleColors}
      </div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
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
