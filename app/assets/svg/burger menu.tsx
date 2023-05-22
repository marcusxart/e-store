import { NextPage } from "next";

interface Props {
  onClick?: () => void;
  className?: string;
}

const BurgerMenu: NextPage<Props> = ({ onClick, className }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      onClick={onClick}
      className={className}
      enableBackground="new 0 0 32 32"
      id="Editable-line"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <line
          fill="none"
          id="XMLID_103_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="16"
          y2="16"
        ></line>
        <line
          fill="none"
          id="XMLID_102_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="25"
          y2="25"
        ></line>
        <line
          fill="none"
          id="XMLID_101_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="7"
          y2="7"
        ></line>
      </g>
    </svg>
  );
};

export default BurgerMenu;
