import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
