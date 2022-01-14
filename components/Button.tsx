import React, { FC, ReactElement } from "react";

interface ButtonProps {
  color?: "red" | "blue";
  size?: "small" | "medium" | "large";
  type?: "regular" | "outline";
  icon?: ReactElement;
}

const getSize = (size: "small" | "medium" | "large"): string => {
  switch (size) {
    case "small":
      return "h-small w-small text-xs";
    case "medium":
      return "h-medium w-medium";
    case "large":
      return "h-large w-large text-xl";
    default:
      return "h-small w-small";
  }
};

const getColorRegular = (color: "red" | "blue"): string => {
  switch (color) {
    case "red":
      return "bg-red-primary hover:bg-red-hover focus:bg-red-focus text-white";
    case "blue":
      return "bg-blue-primary hover:bg-blue-hover focus:bg-blue-focus text-white";
    default:
      return "bg-blue-primary hover:bg-blue-hover focus:bg-blue-focus text-white";
  }
};

const getColorOutline = (color: "red" | "blue"): string => {
  switch (color) {
    case "red":
      return "outline-red-primary text-red-primary hover:bg-red-hover hover:text-white focus:bg-red-focus focus:text-white";
    case "blue":
      return "outline-blue-primary text-blue-primary hover:bg-blue-hover hover:text-white focus:bg-blue-focus focus:text-white";
    default:
      return "outline-blue-primary text-blue-primary hover:bg-blue-hover hover:text-white focus:bg-blue-focus focus:text-white";
  }
};

const getType = (
  type: "regular" | "outline",
  color: "red" | "blue"
): string => {
  switch (type) {
    case "regular":
      return getColorRegular(color);
    case "outline":
      return getColorOutline(color);
    default:
      return getColorRegular(color);
  }
};

export const Button: FC<ButtonProps> = ({ color, size, type, icon }) => {
  return (
    <button
      className={`${getSize(size)} ${getType(
        type,
        color
      )} rounded focus:outline-none`}
    >
      Click me
    </button>
  );
};
