import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;