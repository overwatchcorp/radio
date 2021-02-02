import { configureStore } from '@reduxjs/toolkit';
import stationReducer from '../features/stations/stationSlice';

export default configureStore({
  reducer: {
    stations: stationReducer,
  },
});
