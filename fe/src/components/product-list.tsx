"use client";

import ProductType from "@/types/product";
import Image from "next/image";
import ProductItem from "./product-item";

type Props = { products: ProductType[]; handleClick: (productId: number) => void };

export default function ProductList({ products, handleClick }: Props) {
  return (
    <>
      {/* List Products */}
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}
