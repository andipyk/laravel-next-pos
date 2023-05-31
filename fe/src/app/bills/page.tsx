export default function SavedBills() {
  const dummyData = [
    {
      timestamp: '2023-05-30 09:25:00',
      orderId: 'ORD-001',
      adminName: 'John Doe',
      customerName: 'Jane Smith',
      detail: 'Lorem ipsum dolor sit amet',
    },
    {
      timestamp: '2023-05-29 14:30:00',
      orderId: 'ORD-002',
      adminName: 'Jane Doe',
      customerName: 'John Smith',
      detail: 'Consectetur adipiscing elit',
    },
    // Tambahkan data dummy lainnya jika diperlukan
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Saved Bills</h1>

      <div className="p-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2">Timestamp</th>
              <th className="p-2">ID Order</th>
              <th className="p-2">Nama Admin</th>
              <th className="p-2">Nama Kostumer</th>
              <th className="p-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <tr key={index}>
                <td className="p-2">{data.timestamp}</td>
                <td className="p-2">{data.orderId}</td>
                <td className="p-2">{data.adminName}</td>
                <td className="p-2">{data.customerName}</td>
                <td className="p-2">{data.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
