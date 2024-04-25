import { addPostClearForm } from "../../../redux/profile-reducer.ts";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts    
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPostClearForm })(MyPosts);

export default MyPostsContainer;