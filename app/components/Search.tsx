"use client";
import { NextPage } from "next";
import SearchIcon from "../assets/svg/search icon";
import Close from "../assets/svg/close";

interface Props {}

const Search: NextPage<Props> = ({}) => {
  return (
    <div className="border border-grey border-solid rounded flex items-center py-2 px-3 gap-2 w-[400px]">
      <SearchIcon className="w-5 fill-black" />
      <input
        type="text"
        className="w-full border-none outline-none inline-block"
        placeholder="Search products"
      />
      <Close className="w-4 fill-grey" />
    </div>
  );
};

export default Search;
