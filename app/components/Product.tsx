"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: Product;
  link?: string;
}

const Product: NextPage<Props> = ({ data, link }) => {
  const router = useRouter();
  return (
    <div
      className="px-3 py-4 w-full max-w-[250px] shadow-lg bg-white rounded-lg cursor-pointer hover:scale-[1.1] duration-75 relative"
      onClick={() => (link ? router.push(link) : null)}
    >
      <div className="absolute text-xs text-primary bg-bagde py-1 px-2 font-medium right-3">
        <span>-{data.discountPercentage}%</span>
      </div>
      <Image
        className=" rounded-lg object-contain  w-full h-[200px]"
        src={data.images[0]}
        alt="product image"
        width="100"
        height="100"
      />
      <div className="mt-3">
        <p className=" text-sm whitespace-nowrap overflow-hidden text-ellipsis opacity-70 capitalize">
          {data.title}
        </p>
        <p className="text-sm mt-1 font-medium">$ {data.price}</p>
      </div>
    </div>
  );
};

export default Product;
