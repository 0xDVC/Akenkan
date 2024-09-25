import { useState, useEffect } from 'react';

interface Book {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
  };
  categories?: string[];
}

const useBookSearch = (bookName: string) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (!bookName) return; // Avoid empty searches
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookName)}`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const volumeInfo = data.items[0].volumeInfo;
          setBook({
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            imageLinks: volumeInfo.imageLinks,
            categories: volumeInfo.categories,
          });
        } else {
          setBook(null); // Reset if no book found
        }
      } catch (err) {
        setError('Failed to fetch book data');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookName]);

  return { book, loading, error };
};

export default useBookSearch;