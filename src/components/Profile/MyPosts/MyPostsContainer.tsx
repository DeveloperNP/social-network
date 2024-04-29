import MyPosts from './MyPosts.tsx'
import { connect } from 'react-redux'
import { PostType } from '../../../types/types.ts'
import { addPostClearForm } from '../../../redux/profile-reducer.ts'
import { AppStateType } from '../../../redux/redux-store.ts'

type MapStatePropsType = {
  posts: Array<PostType>
}

type MapDispatchPropsType = {
  addPostClearForm: (newPostText: string) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts    
  }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { addPostClearForm })(MyPosts)

export default MyPostsContainer