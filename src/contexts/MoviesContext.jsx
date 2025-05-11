import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.find(m => m.id === movie.id)) {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(prev => prev.filter(movie => movie.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some(movie => movie.id === id);
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);
