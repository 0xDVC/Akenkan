import { readFileSync } from 'fs';
import path from 'path';

interface Book {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    pageCount: number;
    categories: string[];
    thumbnail: string;
}


const loadBooksData = (filePath: string): Book[] => {
    try {
        const absolutePath = path.resolve(__dirname, filePath); 
        const data = readFileSync(absolutePath, 'utf-8');
        return JSON.parse(data); 
    } catch (error) {
        console.error('Error loading books data:', error);
        return []; 
    }
};
const books: Book[] = loadBooksData('books.json');

export default books; 