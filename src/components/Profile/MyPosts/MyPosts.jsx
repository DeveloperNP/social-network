import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.newPost}>
      <Field component='textarea' name='newPostText' placeholder='Enter your post' />      
      <button>Add post</button>
    </form>
  );
}

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  let addNewPost = (formData) => {    
    props.addPost(formData.newPostText);
  }

  return (
    <div className={s.posts}>
      <div className={s.postsHeader}>
        <h3>MY POSTS</h3>        
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;