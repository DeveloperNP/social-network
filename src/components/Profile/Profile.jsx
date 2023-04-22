import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;