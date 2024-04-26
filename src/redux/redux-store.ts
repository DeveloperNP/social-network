import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import sidebarReducer from "./sidebar-reducer.ts";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer.ts";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

const store = configureStore({
  reducer: rootReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


// @ts-ignore
window.store = store;

export default store;