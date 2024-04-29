import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post.tsx'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators.js'
import { Textarea, createField } from '../../common/FormsControls/FormsControls.js'
import { PostType } from '../../../types/types.ts'

const maxLength100 = maxLengthCreator(100)

const AddPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={s.newPost}>
      {createField(Textarea, [required, maxLength100], 'newPostText', 'Enter your post')}
      <button>Add post</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)



type MyPostsPropsType = {
  posts: Array<PostType>
  addPostClearForm: (newPostText: string) => void
}

const MyPosts = ({posts, addPostClearForm}: MyPostsPropsType): React.JSX.Element => {
  let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  let addNewPost = (formData) => {    
    addPostClearForm(formData.newPostText)
  }

  return (
    <div className={s.posts}>
      <div className={s.postsHeader}>
        <h3>MY POSTS</h3>        
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts