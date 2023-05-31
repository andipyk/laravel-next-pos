import useSavedBills from "@/hooks/useSaveBill";
import CartType from "@/types/cart";
import ProductType from "@/types/product";
import Link from "next/link";
import { useState } from "react";

type Props = {
  carts: CartType[];
  products: ProductType[];
  handleDecreaseQuantity: (productId: number) => void;
  printBill: () => void;
};

export default function Cart({
  carts,
  products,
  handleDecreaseQuantity,
  printBill,
}: Props) {
  const totalCost = carts.reduce((acc, cart) => {
    const product = products.find((product) => product.id === cart.productId);
    if (!product) {
      return acc;
    }
    const cost = product.price * cart.quantity;
    return acc + cost;
  }, 0);

  const isDisabled: boolean = carts.length === 0;

  const { savedBills, saveBill } = useSavedBills();
//   const { payment, change, handleCharge, handlePaymentChange, resetPayment } =
//   usePayment(totalCost);

  const handleSaveBill = () => {
    saveBill();
    console.log(savedBills);
    
  };

  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Cart</h1>

      <div className="p-4" id="print-content">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2">Nama Produk</th>
              <th className="p-2">Kuantitas</th>
              <th className="p-2">Harga</th>
            </tr>
          </thead>
          <tbody>
            {/* cart by products */}
            {carts.map((cart) => {
              const product = products.find(
                (product) => product.id === cart.productId
              );
              if (!product) {
                return null;
              }
              const cost = product.price * cart.quantity;

              return (
                <tr key={cart.id}>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2 text-right">
                    {cart.quantity}x{" "}
                    <button
                      onClick={() => handleDecreaseQuantity(cart.productId)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      disabled={isDisabled}
                    >
                      -
                    </button>
                  </td>
                  <td className="p-2">Rp {cost}</td>
                </tr>
              );
            })}

            <tr>
              <th className="p-2">Total</th>
              <th className="p-2"></th>
              <th className="p-2">Rp {totalCost}</th>
            </tr>
            {/* end cart by products */}
          </tbody>
        </table>
      </div>
      <>
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <button
              disabled={isDisabled}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSaveBill}
            >
              Save Bill
            </button>
          </div>
          <div className="w-1/2">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={printBill}
              disabled={isDisabled}
            >
              Print Bill
            </button>
          </div>
        </div>

        <div className="flex flex-wrap bg-red-500">
          <div className="w-1/3">
            <Link
              href="/bills"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              Saved Bills
            </Link>
          </div>
          <div className="w-2/3">
            <button
              disabled={isDisabled}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowPaymentForm(true)}

            >
              Charge Rp {totalCost}
            </button>
          </div>
          {/* {payment > 0 && (
          <p className="text-white mt-2">Uang Pembeli: Rp {payment}</p>
        )}
        {change > 0 && (
          <p className="text-white">Kembalian: Rp {change}</p>
        )}
        {showPaymentForm && payment >= 0 && (
          <div className="flex flex-col mt-2">
            <input
              type="number"
              value={payment}
              onChange={handlePaymentChange}
              placeholder="Masukkan Jumlah Uang Pembeli"
              className="p-2 rounded"
            />
            <button
              onClick={handleCharge}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              disabled={payment < totalCost}
            >
              Selesai
            </button>
          </div>
        )} */}
        </div>
      </>
    </div>
  );
}
