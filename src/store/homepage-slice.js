import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: { items: [], notification: null, registeredUserData: null, loginUserData: null},
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
    addRegisterUserData(state, action){
      state.registeredUserData = {
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token
      }
    },
    addLoginUserData(state, action){
      state.loginUserData = {
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token
      }
    }
  },
});

export const homepageActions = homepageSlice.actions;
export default homepageSlice;
