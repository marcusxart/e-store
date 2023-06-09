"use client";
import React, { useState } from "react";
import Image from "next/image";
import StarsRating from "react-star-rate";
import Link from "next/link";
import Button from "@/app/components/Button";

type Props = {
  data: Product;
};

const Content = ({ data }: Props) => {
  const [productImage, setProductImage] = useState<string | undefined>(
    data?.images[0]
  );
  const calculateMainPrice = (
    removePercentage: number,
    ammount: number
  ): number => {
    const valueRemovePercentage = 100 - removePercentage;
    const mainValue = (ammount * 100) / valueRemovePercentage;
    return Math.floor(mainValue);
  };
  return (
    <div className="flex w-full flex-col lg:flex-row bg-white p-4 py-7 rounded-md shadow-md">
      <div className="flex  justify-center flex-1 px-10 flex-col gap-6 mb-5 lg:mb-0">
        {productImage && (
          <Image
            src={productImage}
            width={100}
            height={100}
            alt="product image"
            className="w-full h-[350px] object-cover lg:object-contain"
          />
        )}

        <div className="w-full flex items-center justify-center overflow-auto  gap-4">
          {data?.images?.map((image, idx) => (
            <Image
              src={image}
              key={idx}
              width={50}
              height={50}
              alt="product image"
              className=""
              onClick={() => setProductImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex-1">
          <div className="mb-4">
            <p className="text-xl max-w-[500px] font-medium ">{data?.title}</p>
            <p className="text-base max-w-[500px] opacity-75  ">
              {data?.description}
            </p>
          </div>
          <p>
            Category:{" "}
            <Link
              href={`http://localhost:3000/products/category/${data?.category}`}
              className="underline cursor-pointer hover:text-primary capitalize "
            >
              {data?.category?.replace("-", " ")}
            </Link>
          </p>
          <div className="my-4">
            {data?.rating && (
              <StarsRating
                value={data?.rating}
                disabled
                style={{ style: { fontSize: "16px" } }}
              />
            )}
          </div>
          <div className="my-4">
            <p className="font-semibold text-3xl">$ {data?.price}</p>
            {data?.discountPercentage && (
              <p className="font-semibold text-2xl line-through text-grey mt-2 flex items-center">
                <span className="opacity-60 mr-2">
                  ${" "}
                  {data?.price &&
                    calculateMainPrice(data?.discountPercentage, data?.price)}
                </span>
                <span className=" text-xs text-primary bg-bagde py-1 px-2 font-medium inline-block">
                  <span>{data?.discountPercentage}%</span>
                </span>
              </p>
            )}
          </div>
          <Button text="ADD TO CART" onClick={() => null} />
        </div>
      </div>
    </div>
  );
};

export default Content;
