import { NextPage } from "next";
import Link from "next/link";

interface Props {
  onClick?: () => void;
  text: string;
  fit?: boolean;
  href?: string;
}

const Button: NextPage<Props> = ({ onClick, text, fit, href }) => {
  const className = `bg-primary py-2  px-4 lg:px-6 rounded-lg shadow-md border-none outline-none cursor-pointer ${
    fit ? "w-fit" : ""
  }`;
  return (
    <>
      {href ? (
        <Link href={href} className={className}>
          <span className="font-medium text-sm lg:text-lg text-white">
            {text}
          </span>
        </Link>
      ) : (
        <button onClick={onClick} className={className}>
          <span className="font-medium text-sm lg:text-lg text-white">
            {text}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
