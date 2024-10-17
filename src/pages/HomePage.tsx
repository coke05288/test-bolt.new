import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';
import { fetchBooks } from '../api/books';

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    const loadBooks = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };
    loadBooks();
  }, []);

  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">도서 목록</h1>
      <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">모든 카테고리</option>
          <option value="fiction">소설</option>
          <option value="non-fiction">논픽션</option>
          <option value="science">과학</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-blue-600 font-bold">{book.price.toLocaleString()}원</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;