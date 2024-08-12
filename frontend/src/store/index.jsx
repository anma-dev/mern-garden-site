import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
