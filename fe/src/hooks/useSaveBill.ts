import { useState } from 'react';

type SavedBill = {
  timestamp: string;
  orderId: string;
  adminName: string;
  customerName: string;
  detail: string;
};

const useSavedBills = () => {
  const [savedBills, setSavedBills] = useState<SavedBill[]>([]);

  const saveBill = () => {
    const newBill: SavedBill = {
      timestamp: '2023-05-30 09:25:00',
      orderId: 'ORD-001',
      adminName: 'John Doe',
      customerName: 'Jane Smith',
      detail: 'Lorem ipsum dolor sit amet',
    };
    setSavedBills((prevBills) => [...prevBills, newBill]);
  };

  return {
    savedBills,
    saveBill,
  };
};

export default useSavedBills;
