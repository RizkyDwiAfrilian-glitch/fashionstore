"use client";

import Link from "next/link";
import { useCart } from "./cart-provider";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <img src="https://i.pinimg.com/736x/53/95/fb/5395fb63f3609044048a4441e8b01d9a.jpg" alt="KyStore Logo" className="h-15 w-15" />
        <div className="text-xl font-bold text-black ">KyStore</div>
        {/* <input type="text" placeholder="Search..." className="border border-gray-300 rounded-lg py-2 px-4 text-black " /> */}
        <div className="flex items-center gap-6 text-black">
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
          <Link href="/history">Story</Link>
          <Link
            href="/cart"
            className="relative rounded-lg border border-gray-300 px-4 py-2.5 hover:border-black"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}