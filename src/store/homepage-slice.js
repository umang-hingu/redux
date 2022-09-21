import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: { items: [], notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    addItem(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const homepageActions = homepageSlice.actions;
export default homepageSlice;
