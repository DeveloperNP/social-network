import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
  }
});

window.store = store;

export default store;