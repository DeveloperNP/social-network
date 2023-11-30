import React from 'react';
import ProfileInfo from './PropfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;