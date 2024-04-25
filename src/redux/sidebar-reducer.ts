import { FriendType } from "../types/types";

let initialState = {
  friends: [
    { id: 1, name: 'Andrey', avatar: "./images/Andrey_avatar.jpg" },
    { id: 2, name: 'Julia', avatar: "./images/Julia_avatar.jpg" },
    { id: 3, name: 'Lyonya', avatar: "./images/Lyonya_avatar.jpg" }
  ] as Array<FriendType>
}

export type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
 

  return state;
}

export default sidebarReducer;