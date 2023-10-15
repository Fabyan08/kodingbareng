import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  rotate: number | string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, rotate } = props;
  return (
    <>
      <a
        className={`hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-biru text-white border-white border-4 rotate-${rotate} hover:rotate-0 hover:scale-125 hover:bg-gray-100 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200`}
        href="pages/auth/signin.html"
      >
        {children}
      </a>
    </>
  );
};

export default Button;
