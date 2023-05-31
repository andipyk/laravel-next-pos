import ProductType from "@/types/product";
import Image from "next/image";

type Props = {product: ProductType, handleClick: (productId: number) => void}

export default function ProductItem({product, handleClick}: Props) {
    return(
        <div
        key={product.id}
        className="w-1/3 p-2"
        onClick={() => handleClick(product.id)}
      >
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 cursor-pointer">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
          <div className="px-4 pb-4">
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm">Rp{product.price}</p>
          </div>
        </div>
      </div>
    )
}