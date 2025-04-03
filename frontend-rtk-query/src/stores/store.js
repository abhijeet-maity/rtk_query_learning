import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderAPI } from "../apiSlices/jsonPlaceholderApi";
import { getMyPostsAPI } from "../apiSlices/getMyPostsAPI";

export const store = configureStore({
  reducer: {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    [getMyPostsAPI.reducerPath]: getMyPostsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jsonPlaceholderAPI.middleware,
      getMyPostsAPI.middleware
    ),
});

setupListeners(store.dispatch);
