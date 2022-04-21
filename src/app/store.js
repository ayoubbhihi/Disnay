import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../component/features/user/userSlice";
import movieReducer from "../component/features/Movie/MovieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});