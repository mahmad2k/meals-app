import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const payload = action.payload;
      state.ids.push(payload.id);
    },
    removeFavorite: (state, action) => {
      const payload = action.payload;
      state.ids.splice(state.ids.indexOf(payload.id), 1);
    },
  },
});

export const selectfavoriteMealIds = (state) => state.favoriteMeals.ids;

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
