import { useState, useEffect } from 'react';

interface Book {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
  };
  categories?: string[];
}

const useBooksByCategory = (category: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!category) return; // Avoid empty category searches
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}`);
        const data = await response.json();

        if (data.items) {
          const fetchedBooks = data.items.map((item: any) => ({
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            imageLinks: item.volumeInfo.imageLinks,
            categories: item.volumeInfo.categories,
          }));
          setBooks(fetchedBooks);
        } else {
          setBooks([]); // Reset if no books found
        }
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  return { books, loading, error };
};

export default useBooksByCategory;
