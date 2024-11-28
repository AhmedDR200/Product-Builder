import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-2 border-blue-300 bg-white/5
      rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600
      focus:ring-opacity-50 transition-all duration-300 ease-in-out
      box-shadow-md hover:shadow-lg hover:bg-white/10 hover:border-blue-400
      "
      {...rest}
    />
  );
};

export default Input;
