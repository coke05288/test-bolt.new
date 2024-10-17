import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../types';
import { fetchBookById } from '../api/books';
import { CartContext } from '../contexts/CartContext';

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadBook = async () => {
      if (id) {
        const fetchedBook = await fetchBookById(id);
        setBook(fetchedBook);
      }
    };
    loadBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row">
        <img src={book.imageUrl} alt={book.title} className="w-full md:w-1/3 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-2">저자: {book.author}</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">{book.price.toLocaleString()}원</p>
          <p className="text-gray-700 mb-6">{book.description}</p>
          <button
            onClick={() => addToCart(book)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;