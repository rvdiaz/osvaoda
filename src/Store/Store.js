import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ActiveProductColor from '../Slices/ActiveProductColor';

import cartSlice from "../Slices/CartSlice";
import favoritesSlice from '../Slices/FavoritesSlice';
import uiCartDrawerSlice from "../Slices/uiCartDrawer";

const persistConfigCart = {
    key: 'cart',
    version: 1,
    storage,
  }

const persistedReducerCart = persistReducer(persistConfigCart, cartSlice.reducer);

const persistConfigFavorites = {
  key: 'favorite',
  version: 1,
  storage,
}

const persistedReducerFavorites = persistReducer(persistConfigFavorites, favoritesSlice.reducer);

export const store=configureStore({
    reducer:{
        cart:persistedReducerCart,
        favorite:persistedReducerFavorites,
        cartdrawer:uiCartDrawerSlice.reducer,
        activeColor:ActiveProductColor.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export let persistor = persistStore(store);

