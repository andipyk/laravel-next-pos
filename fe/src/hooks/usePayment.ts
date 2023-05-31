import { useState } from 'react';

const usePayment = (totalCost: number) => {
  const [payment, setPayment] = useState(0);
  const [change, setChange] = useState(0);

  const handleCharge = () => {
    if (payment >= totalCost) {
      const calculatedChange = payment - totalCost;
      setChange(calculatedChange);
    } else {
      setChange(0);
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value, 10);
    setPayment(value);
  };

  const resetPayment = () => {
    setPayment(0);
    setChange(0);
  };

  return {
    payment,
    change,
    handleCharge,
    handlePaymentChange,
    resetPayment,
  };
};

export default usePayment;
