import CartType from "@/types/cart";
import { useState } from "react";

export function useCart(initialCarts: CartType[]) {
  const [carts, setCarts] = useState(initialCarts);

  const handleAddQuantity = (productId: number) => {
    const cartIndex = carts.findIndex((cart) => cart.productId === productId);
    if (cartIndex !== -1) {
      const updatedCarts = [...carts];
      updatedCarts[cartIndex].quantity += 1;
      setCarts(updatedCarts);
    } else {
      setCarts([
        ...carts,
        {
          id: carts.length + 1,
          productId: productId,
          quantity: 1,
        },
      ]);
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const cartIndex = carts.findIndex((cart) => cart.productId === productId);
    if (cartIndex !== -1) {
      const updatedCarts = [...carts];
      if (updatedCarts[cartIndex].quantity > 1) {
        updatedCarts[cartIndex].quantity -= 1;
        setCarts(updatedCarts);
      } else {
        updatedCarts.splice(cartIndex, 1);
        setCarts(updatedCarts);
      }
    }
  };

  const printBill = () => {
    const printContent = document.getElementById("print-content");
    if (printContent) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(printContent.innerHTML);
        printWindow.document.close();
        printWindow.print();
        printWindow.close(); // Menutup tab setelah mencetak
      }
    }
  };

  return { carts, handleAddQuantity, handleDecreaseQuantity, printBill };
}
