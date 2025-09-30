import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button></button>
}

<Button variant = "primary" size = "md" onClick = {()=>{}} text= {"asd"}  />
