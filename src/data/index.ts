import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../interfaces/data";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "BMW X5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, nemo quos, voluptatum, quidem doloribus",
    imageURL:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 5000.0,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, nemo quos, voluptatum, quidem doloribus",
    imageURL:
      "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 3000.0,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, nemo quos, voluptatum, quidem doloribus",
    imageURL:
      "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 7000.0,
    colors: ["FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];
