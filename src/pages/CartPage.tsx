import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('결제가 완료되었습니다!');
    clearCart();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">{item.author}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-bold mr-4">{item.price.toLocaleString()}원</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">총 금액: {total.toLocaleString()}원</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
            >
              결제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;