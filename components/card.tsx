"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useCart } from "./cart-provider";

type CardProps = {
  children: ReactNode;
  classname?: string;
  imagessrc: string;
  diskon: string;
  nama : string;
  category?: string;
  id: number;
  priceValue: number;
};

const Card = ({ children, classname, imagessrc, diskon, nama, category, id, priceValue }: CardProps) => {
  const { addItem } = useCart();

  return (
    <div
      className={`w-[280px] bg-white shadow-lg rounded-2xl p-4 transition duration-300 hover:scale-105 
              hover:bg-gray-500 ${classname}`}
    >
      
      <div className="relative bg-gray-100 rounded-xl p-5">
        
        <div className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          {diskon}% OFF
        </div>
        <img
          src={imagessrc}
          alt="Product"
          className="w-full h-[220px] object-contain"
        />
      </div>

      <h1 className="text-black font-semibold mt-4">
        {nama}
      </h1>

      {children}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href={`/store/id?id=${id}`}
          className="rounded-lg border border-black py-3 text-center text-sm font-medium text-black transition duration-200 hover:bg-gray-100"
        >
          View
        </Link>
        <button
          type="button"
          onClick={() => addItem({ id, nama, imagessrc, priceValue })}
          className="rounded-lg bg-black py-3 text-sm font-medium text-white transition duration-200 hover:bg-gray-800"
        >
          Add
        </button>
      </div>
      
    </div>
  );
};

export default Card;