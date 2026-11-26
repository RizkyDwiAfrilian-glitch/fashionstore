
"use client";
import products from "@/data/data";
import { useState } from "react";
import Card from "@/components/card";



const categories = ["All", "Shoes", "Jacket", "Shirt", "Pants"];

export default function CardStore() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.nama
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6 ">

      {/* CATEGORY */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 active:scale-95 ${selectedCategory === category
                ? "bg-black text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 text-black"
        />

      </div>

      {/* CARD PRODUK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch ">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            classname=""
            imagessrc={product.imagessrc}
            diskon={product.diskon}
            nama={product.nama}
            category={product.category}
            priceValue={product.priceValue}
          >
            <div className="flex items-center justify-between mt-3 ">
              <p className="text-xl text-black font-bold">
                {product.price}
              </p>

              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600">4.0</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* PRODUK KOSONG */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Produk tidak ditemukan.
        </p>
      )}

    </div>
  );
}
