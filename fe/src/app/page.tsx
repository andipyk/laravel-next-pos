"use client";

import Cart from "@/components/cart";
import ProductList from "@/components/product-list";
import products from "@/data/product";
import { useCart } from "@/hooks/useCart";
import CartType from "@/types/cart";

export default function Home() {
  const initialCarts: CartType[] = [];

  const { carts, handleAddQuantity, handleDecreaseQuantity, printBill } =
    useCart(initialCarts);

  return (
    <div className="flex ">
      {/* 2/3 screen  */}
      <div className="flex flex-wrap w-2/3 ">
        <ProductList products={products} handleClick={handleAddQuantity} />
      </div>
      <div className="w-px bg-white mx-4"></div>

      {/* 1/3 screen */}
      <div className="w-1/3 ">
        <Cart
          carts={carts}
          products={products}
          handleDecreaseQuantity={handleDecreaseQuantity}
          printBill={printBill}
        />
      </div>
    </div>
  );
}
