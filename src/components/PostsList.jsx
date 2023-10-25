import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Anuška" body="Moj prvi razumljivi prop!" />
        <Post author="Nada" body="React is awesome!!!" />
      </ul>
    </>
  );
}

export default PostsList;
