"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import products from "@/data/data";
import { useCart } from "@/components/cart-provider";

function ProductDetail() {
  const searchParams = useSearchParams();
  const productId = Number(searchParams.get("id")) || 1;
  const product = products.find((item) => item.id === productId) || products[0];
  const [purchased, setPurchased] = useState(false);
  const { addItem } = useCart();

  const addToCart = () => {
    addItem({
      id: product.id,
      nama: product.nama,
      imagessrc: product.imagessrc,
      priceValue: product.priceValue,
    });
    setPurchased(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/store"
          className="mb-6 inline-flex items-center font-medium text-gray-700 hover:text-black"
        >
          &larr; Back to Store
        </Link>

        <section className="grid gap-8 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
          <div className="relative rounded-2xl bg-gray-100 p-6">
            <span className="absolute left-5 top-5 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
              {product.diskon}% OFF
            </span>
            <img
              src={product.imagessrc}
              alt={product.nama}
              className="h-[420px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-black md:text-4xl">
              {product.nama}
            </h1>
            <p className="mt-5 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 flex items-end justify-between border-t border-gray-200 pt-6">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-3xl font-bold text-black">{product.price}</p>
              </div>
              <div className="text-sm">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-1 text-gray-600">4.0</span>
              </div>
            </div>

            <button
              type="button"
              onClick={addToCart}
              className="mt-8 w-full rounded-xl bg-black py-4 text-lg font-semibold text-white transition hover:scale-[1.02] hover:bg-gray-800"
            >
              Add to Cart
            </button>
            {purchased && (
              <Link
                href="/cart"
                className="mt-3 block w-full rounded-xl border border-black py-3 text-center font-semibold text-black hover:bg-gray-100"
              >
                View Cart
              </Link>
            )}

            {purchased && (
              <div
                role="status"
                className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
              >
                {product.nama} has been added to your purchase.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ProductDetail />
    </Suspense>
  );
}