import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.pageData.posts}/>
    </div>
  );
}

export default Profile;