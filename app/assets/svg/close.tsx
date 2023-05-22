import { NextPage } from "next";

interface Props {
  onClick?: () => void;
  className?: string;
}

const Close: NextPage<Props> = ({ onClick, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Close_LG">
          <path
            id="Vector"
            d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Close;
