// /store/store.js
import { configureStore } from "@reduxjs/toolkit";
import transportBookingReducer from "@/store/transportBookingSlice";

export const store = configureStore({
  reducer: {
    booking: transportBookingReducer,
  },
});
