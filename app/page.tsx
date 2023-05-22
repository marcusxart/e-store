import Image from "next/image";

import PageWrapper from "./components/PageWrapper";
import getProductsCategories from "@/lib/getProductsCategories";
import { Lobster } from "next/font/google";
import Button from "./components/Button";
import Link from "next/link";

type ProductsCategories = Array<string>;

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default async function Home() {
  const categoriesData: Promise<ProductsCategories> = getProductsCategories();
  const categories = await categoriesData;

  return (
    <PageWrapper>
      <main className="w-full flex ">
        <div className="pt-6 flex w-full gap-7">
          <ul className="w-52 bg-white p-4 flex-col gap-1 rounded-md shadow-md h-fit hidden lg:flex">
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className="capitalize text-sm hover:text-primary cursor-pointer"
                >
                  <Link href={`/products/category/${category}`}>
                    {category.replace("-", " ")}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="bg-white flex flex-col-reverse w-full shadow-md p-7 gap-6 min-h-[300px] lg:min-h-[506px] h-fit rounded-md lg:flex-row">
            <div className="flex-1 flex items-center lg:items-start justify-center flex-col text-center lg:text-left mb-7 lg:mb-0">
              <div className="mb-4 flex items-center flex-col">
                <h1 className="text-2xl  lg:text-4xl font-mediu mb-2 lg:mb-4 max-w-[400px] lg:max-w-none ">
                  <span className={`${lobster.className} text-primary`}>
                    ShopSmart:
                  </span>
                  Your Ultimate Destination for Online Shopping
                </h1>
                <p className="text-xs lg:text-base opacity-70 max-w-[600px] lg:max-w-none">
                  Discover Endless Possibilities, Find Your Perfect Products,
                  and Enjoy Seamless Shopping with ShopVerse&apos;s Trusted
                  E-Commerce Platform.
                </p>
              </div>
              <Button text="VIEW SOME PRODUCTS" fit href="/products" />
            </div>
            <div className=" flex-1 flex justify-center items-center lg:items-start">
              <Image
                className="w-[250px] h-[250px] lg:w-full lg:h-[380px] object-contain"
                src="/images/shopping_bags.png"
                width="100"
                height="100"
                alt="home image"
                placeholder="blur"
                blurDataURL="/images/shopping_bags.png"
              />
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
