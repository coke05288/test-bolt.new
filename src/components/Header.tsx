import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">도서 스토어</Link>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="도서 검색..."
            className="px-3 py-1 rounded text-black"
          />
          <Link to="/cart" className="relative">
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button onClick={logout} className="flex items-center">
              <User className="mr-1" />
              로그아웃
            </button>
          ) : (
            <Link to="/login" className="flex items-center">
              <User className="mr-1" />
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;