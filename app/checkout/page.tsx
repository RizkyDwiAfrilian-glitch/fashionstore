"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/cart-provider";

const formatPrice = (value: number) =>
  `$${value.toLocaleString("id-ID")}`;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [completed, setCompleted] = useState(false);

  const handlePayment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearCart();
    setCompleted(true);
  };

  if (completed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-16">
        <section className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-black">Payment Successful</h1>
          <p className="mt-3 text-gray-600">
            Your order has been placed and is being processed.
          </p>
          <Link
            href="/store"
            className="mt-7 inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
        <section className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-black">No items to checkout</h1>
          <Link
            href="/store"
            className="mt-6 inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white"
          >
            Go to Store
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <form
        onSubmit={handlePayment}
        className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]"
      >
        <section className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h1 className="text-2xl font-bold text-black">Checkout</h1>
            <h2 className="mt-6 font-bold text-black">Shipping Information</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Full name" className="rounded-lg border border-gray-300 px-4 py-3 text-black" />
              <input required name="phone" placeholder="Phone number" className="rounded-lg border border-gray-300 px-4 py-3 text-black" />
              <input required name="email" type="email" placeholder="Email" className="rounded-lg border border-gray-300 px-4 py-3 text-black sm:col-span-2" />
              <textarea required name="address" placeholder="Complete address" rows={3} className="rounded-lg border border-gray-300 px-4 py-3 text-black sm:col-span-2" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="font-bold text-black">Payment Method</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["cod", "Cash on Delivery"],
                ["bank", "Bank Transfer"],
                ["card", "Credit Card"],
              ].map(([value, label]) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-xl border p-4 text-sm font-semibold ${
                    paymentMethod === value
                      ? "border-black bg-gray-100 text-black"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={paymentMethod === value}
                    onChange={() => setPaymentMethod(value)}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input required name="cardNumber" inputMode="numeric" placeholder="Card number" className="rounded-lg border border-gray-300 px-4 py-3 text-black sm:col-span-2" />
                <input required name="expiry" placeholder="MM / YY" className="rounded-lg border border-gray-300 px-4 py-3 text-black" />
                <input required name="cvv" inputMode="numeric" placeholder="CVV" className="rounded-lg border border-gray-300 px-4 py-3 text-black" />
              </div>
            )}
            {paymentMethod === "bank" && (
              <p className="mt-5 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
                Transfer instructions and account details will be provided after confirmation.
              </p>
            )}
          </div>
        </section>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-black">Payment Summary</h2>
          <div className="mt-5 space-y-4 border-b border-gray-200 pb-5">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span className="text-gray-600">
                  {item.nama} × {item.quantity}
                </span>
                <span className="shrink-0 font-semibold text-black">
                  {formatPrice(item.priceValue * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between text-lg font-bold text-black">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-black py-4 font-semibold text-white hover:bg-gray-800"
          >
            Pay {formatPrice(subtotal)}
          </button>
        </aside>
      </form>
    </main>
  );
}
