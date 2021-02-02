import { createSlice } from '@reduxjs/toolkit';

export const stationsSlice = createSlice({
  name: 'stations',
  initialState: {
    stations: {
      stations: {
        'http://128.mp3.pls.kdfc.live/': {
          name: 'http://128.mp3.pls.kdfc.live/',
          streamURL: 'http://128.mp3.pls.kdfc.live/',
        },
      },
      stationNames: [
        'http://128.mp3.pls.kdfc.live/',
      ],
    },
  },
  reducers: {
    addStationByURL: (state, action) => {
      const newState = state;
      const { streamURL } = action.payload;
      const name = streamURL;
      const station = {
        name,
        streamURL,
      };
      newState.stations[name] = station;
      newState.stationNames.push(name);
      return newState;
    },
  },
});

export const { addStationByURL } = stationsSlice.actions;

export default stationsSlice.reducer;
