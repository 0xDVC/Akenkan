import { createContext, useContext, useState, ReactNode } from "react";

// import axios from "axios";

interface UserData {
  username: string;
  full_name: string | undefined;
  reading_level: string;
  email: string | undefined;
  telephone: string | undefined;
  language: string;
  favorite_books: Array<string>;
  favorite_genres: Array<string>;
  favorite_authors: Array<string>;
  bookmarks: Record<string, number>;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    username: "johndoe",
    full_name: "John Doe",
    reading_level: "Intermediate",
    email: "johndoe@example.com",
    telephone: "1234567890",
    language: "english",
    favorite_books: ["Book1", "Book2", "Book3"],
    favorite_genres: ["Fiction", "Science Fiction"],
    favorite_authors: ["Author1", "Author2"],
    bookmarks: {},
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
