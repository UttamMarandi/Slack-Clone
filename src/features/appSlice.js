import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId : 0
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state,action) => {
      state.roomId = action.payload.roomId;
    },
    //enterRoom is our action which takes state and action(i.e itself) as parameter. we need action to get the payload that is passed to it
  },
  
});

export const {enterRoom} = appSlice.actions;


export const selectRoomId = (state) => state.app.roomId;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default appSlice.reducer;
