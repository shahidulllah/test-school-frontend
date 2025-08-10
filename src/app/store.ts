import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // To do: add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
