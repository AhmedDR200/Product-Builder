// ** This file is for validation of the input data **
// ** productObj === validationObj (title, description, imageURL, price)

/**
 * @desc  This function validates the input data for the product
 * @param prod - object with title, description, imageURL, price
 * @returns object with errors for each field
 */
export const productValidation = (prod: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(prod.imageURL);
  // const validPrice = /^[0-9]*$/.test(prod.price);

  if (prod.title.length < 10 || prod.title.length > 80 || !prod.title.trim()) {
    errors.title = "Title must be between 10 and 80 characters";
  }

  if (
    prod.description.length < 20 ||
    prod.description.length > 200 ||
    !prod.description.trim()
  ) {
    errors.description = "Description must be between 20 and 200 characters";
  }

  if (!validUrl) {
    errors.imageURL = "Invalid Image URL";
  }

  if (isNaN(Number(prod.price)) || !prod.price.trim()) {
    errors.price = "Invalid Price";
  }

  return errors;
};
