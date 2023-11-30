import * as React from "react";
import Link from "next/link";
import { cx } from "utils";

import { ButtonBackgroundType, ButtonTextColorType } from "types";

type ButtonProps = {
  background: ButtonBackgroundType;
  color: ButtonTextColorType;
  href?: string;
  title?: string;
  arrow?: boolean;
  back?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  href = "",
  title = "",
  arrow = false,
  background = "orange",
  color = "black",
  className = "",
  back = false,
}) => {
  let classNameBackground =
    "bg-orange-500 focus:outline-none text-gray-100 hover:bg-opacity-80 px-4";

  if (background === "transparent") {
    classNameBackground =
      "bg-orange-transparent focus:outline-none hover:text-gray-500";
  } else if (background === "white") {
    classNameBackground = "bg-white focus:ring-white px-4";
  } else if (background === "black") {
    classNameBackground = "bg-black focus:outline-none px-4";
  }

  let classNameColor = "text-black";

  if (color === "gray") {
    classNameColor = "text-gray-100";
  }

  const classNameButton = cx(
    "transition duration-200 inline-flex justify-center rounded-full items-center text-sm font-semibold  leading-[2.3]  font-display gap-3 group focus:outline-none",
    classNameBackground,
    classNameColor,
    className
  );

  // If href starts with http, we use anchor html tag, otherwise we use next/link
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classNameButton}
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameButton}>
      {title}
    </Link>
  );
};

export default Button;
