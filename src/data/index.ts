import { v4 as uuidv4 } from "uuid";
import { IFormInput, IProduct } from "../interfaces/data";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "BMW X5",
    description:
      "A luxury midsize SUV with exceptional performance, premium interiors, and advanced technology features.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "5000.0",
    colors: ["FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Toyota Corolla",
    description:
      "A reliable and fuel-efficient compact car with a sleek design and advanced safety features.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "3000.0",
    colors: ["FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Mercedes Benz",
    description:
      "An iconic brand delivering luxury and performance with cutting-edge technology and comfort.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "7000.0",
    colors: ["FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "iPhone 14 Pro",
    description:
      "The latest iPhone with an advanced camera system, A16 Bionic chip, and innovative features.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "1200.0",
    colors: ["000000", "FFFFFF", "808080", "800080"],
    category: {
      name: "Smartphones",
      imageURL:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Samsung Galaxy S23 Ultra",
    description:
      "Experience cutting-edge innovation with a high-resolution display, powerful performance, and versatile camera.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "1000.0",
    colors: ["000000", "FF0000", "008000"],
    category: {
      name: "Smartphones",
      imageURL:
        "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Sony PlayStation 5",
    description:
      "Immerse yourself in the next generation of gaming with stunning graphics and lightning-fast performance.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "500.0",
    colors: ["000000", "FFFFFF"],
    category: {
      name: "Gaming",
      imageURL:
        "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Apple MacBook Pro M2",
    description:
      "A powerful laptop with the M2 chip, offering incredible speed, stunning display, and long battery life.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "2000.0",
    colors: ["808080", "000000"],
    category: {
      name: "Laptops",
      imageURL:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: uuidv4(),
    title: "Canon EOS R6 Camera",
    description:
      "Capture moments like a pro with this advanced mirrorless camera featuring 4K video and image stabilization.",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "2500.0",
    colors: ["000000"],
    category: {
      name: "Cameras",
      imageURL:
        "https://images.pexels.com/photos/3794775/pexels-photo-3794775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Name",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];

export const colors: string[] = [
  "#33FF57", // Bright Green
  "#3357FF", // Vivid Blue
  "#FF33A1", // Hot Pink
  "#A133FF", // Deep Purple
  "#FFC300", // Golden Yellow
  "#33FFF3", // Aqua Cyan
  "#57FF33", // Lime Green
  "#C70039", // Crimson Red
  "#900C3F", // Dark Magenta
  "#581845", // Royal Plum
  "#DAF7A6", // Pastel Green
  "#FF5733", // Burnt Tangerine
  "#16A085", // Emerald Teal
];
