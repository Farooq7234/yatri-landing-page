import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceType: "outstation",
  tripType: "oneWay",
  fromLocation: "",
  toLocation: "",
  pickUpDate: "",
  returnDate: "",
  pickUpTime: "",
};

const transportBookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setFromLocation: (state, action) => {
      state.fromLocation = action.payload;
    },
    setToLocation: (state, action) => {
      state.toLocation = action.payload;
    },
    setPickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setPickUpTime: (state, action) => {
      state.pickUpTime = action.payload;
    },
  },
});

export const {
  setServiceType,
  setTripType,
  setFromLocation,
  setToLocation,
  setPickUpDate,
  setReturnDate,
  setPickUpTime,
} = transportBookingSlice.actions;

export default transportBookingSlice.reducer;
