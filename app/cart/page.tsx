"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";

const formatPrice = (value: number) =>
  `$${value.toLocaleString("id-ID")}`;

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-16">
        <section className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
            +
          </div>
          <h1 className="text-2xl font-bold text-black">Your cart is empty</h1>
          <p className="mt-3 text-gray-600">Choose an item from the store to start shopping.</p>
          <Link
            href="/store"
            className="mt-7 inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Browse Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-md"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={item.imagessrc}
                    alt={item.nama}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <h2 className="font-semibold text-black">{item.nama}</h2>
                    <p className="mt-1 font-bold text-black">
                      {formatPrice(item.priceValue)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-gray-300">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-9 w-9 text-lg text-black"
                        aria-label={`Decrease ${item.nama} quantity`}
                      >
                        -
                      </button>
                      <span className="w-10 text-center text-sm font-semibold text-black">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-9 w-9 text-lg text-black"
                        aria-label={`Increase ${item.nama} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-black">Order Summary</h2>
            <div className="mt-5 space-y-3 border-b border-gray-200 pb-5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between text-lg font-bold text-black">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block rounded-xl bg-black py-4 text-center font-semibold text-white hover:bg-gray-800"
            >
              Proceed to Payment
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
