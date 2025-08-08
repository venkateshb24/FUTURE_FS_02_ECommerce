import React from 'react';

const OrderHistory = ({ user, onBack }) => {
  // Mock order data - in a real app, this would come from a database
  const mockOrders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 149998,
      items: [
        { name: 'iPhone 15 Pro', quantity: 1, price: 129999 },
        { name: 'Apple AirPods Pro', quantity: 1, price: 24999 }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 39999,
      items: [
        { name: 'Samsung Galaxy Watch 6', quantity: 1, price: 39999 }
      ]
    },
    {
      id: 'ORD003',
      date: '2024-01-05',
      status: 'Delivered',
      total: 119999,
      items: [
        { name: 'Asus ZenBook 14', quantity: 1, price: 119999 }
      ]
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-zinc-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Please Login</h2>
            <p className="text-zinc-600">You need to be logged in to view your order history.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-zinc-600 hover:text-zinc-900 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-zinc-900">Order History</h1>
          <p className="text-zinc-600 mt-2">Welcome back, {user.name}!</p>
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {mockOrders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">No Orders Yet</h3>
              <p className="text-zinc-600">Start shopping to see your order history here.</p>
            </div>
          ) : (
            mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-200">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Order #{order.id}</h3>
                    <p className="text-zinc-600 text-sm">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <p className="text-lg font-bold text-zinc-900 mt-1">₹{order.total.toLocaleString()}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-zinc-900">{item.name}</h4>
                        <p className="text-zinc-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-zinc-900">₹{item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Actions */}
                <div className="mt-4 pt-4 border-t border-zinc-200 flex justify-end">
                  <button className="text-zinc-600 hover:text-zinc-900 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory; 