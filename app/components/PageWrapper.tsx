"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lobster } from "next/font/google";
import Search from "../assets/svg/search icon";
import Close from "../assets/svg/close";
import BurgerMenu from "../assets/svg/burger menu";
import Button from "./Button";
import Cart from "../assets/svg/cart";
import Categories from "./categories";
import { useEffect, useState } from "react";
import getProductsCategories from "@/lib/getProductsCategories";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  children: React.ReactNode;
}

type ProductsCategories = Array<string>;

const PageWrapper: React.FC<Props> = ({ children }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [categoriesData, setCategoriesData] = useState<ProductsCategories>([]);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    router.push(`/products/catalog?search=${searchValue}`);
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoriesData: Promise<ProductsCategories> =
        getProductsCategories();
      const categories = await categoriesData;
      setCategoriesData(categories);
    };

    getCategories();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white flex justify-center shadow">
        <div className="flex justify-between items-center w-full xl:max-w-7xl h-20 px-5 lg:px-8 xl:px-0">
          <div className="text-2xl lg:text-3xl w-fit">
            <Link href="/">
              <span className={`${lobster.className} text-primary`}>
                ShopSmart
              </span>
            </Link>
          </div>
          <form
            className="hidden items-center w-fit gap-3 lg:flex"
            onSubmit={handleSubmit}
          >
            <div className="border border-grey border-solid rounded flex items-center py-2 px-3 gap-2 w-[400px]">
              <Search className="w-5 h-5 fill-black" />
              <input
                type="text"
                className="w-full border-none outline-none inline-block"
                placeholder="Search products"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <Close
                  className="w-4 fill-grey cursor-pointer"
                  onClick={() => setSearchValue("")}
                />
              )}
            </div>
            <Button text="SEARCH" />
          </form>

          <div className="flex  gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <Cart className="w-7" />
              <span className="font-semibold">Cart</span>
            </div>
            <div className=" w-9 lg:hidden">
              <BurgerMenu onClick={() => setToggle(true)} />
            </div>
          </div>
          {toggle && (
            <div className=" lg:hidden bg-white fixed z-40 inset-0 p-4">
              <div className="flex w-full gap-1 justify-end mt-2 mb-4">
                <div
                  className="flex items-center gap-1 w-fit"
                  onClick={() => setToggle(false)}
                >
                  <span>Close</span>
                  <Close className="w-[20px]" />
                </div>
              </div>
              <form
                className=" items-center  gap-3 flex w-full"
                onSubmit={handleSubmit}
              >
                <div className="border border-grey border-solid rounded flex items-center py-2 px-3 gap-2 w-full">
                  <Search className="w-5 h-5 fill-black" />
                  <input
                    type="text"
                    className="w-full border-none outline-none inline-block"
                    placeholder="Search products"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {searchValue && (
                    <Close
                      className="w-4 fill-grey cursor-pointer"
                      onClick={() => setSearchValue("")}
                    />
                  )}
                </div>
                <Button text="SEARCH" />
              </form>
              <div className="mt-8">
                <ul className="flex flex-col gap-1">
                  {categoriesData?.map((category, id) => (
                    <li key={id} className="hover:text-primary">
                      <Link href={`/products/category/${category}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main className="xl:max-w-7xl  pt-20 px-5 lg:px-8 xl:px-0 min-h-screen  mx-auto flex w-full">
        {children}
      </main>
    </>
  );
};

export default PageWrapper;
