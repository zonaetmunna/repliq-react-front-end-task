import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedUsers);
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              number
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td className="px-4 py-2 whitespace-nowrap">{order.number}</td>
              <td className="px-4 py-2 whitespace-nowrap">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
