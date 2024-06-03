import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-4 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none  focus:ring"
);

export const Button = ({ children, className, ...props }) => {
  return <button className={buttonVariants(className)}>{children}</button>;
};
