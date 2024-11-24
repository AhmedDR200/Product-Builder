import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-1/5" | "w-fit";
}

const Button = ({ children, className, width="w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} p-2 w-full rounded-md text-white ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
