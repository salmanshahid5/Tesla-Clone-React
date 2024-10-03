import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'; // Adjust path if necessary

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;
