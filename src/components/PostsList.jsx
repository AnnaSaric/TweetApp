import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author="Nada" body="React is awesome!!!" />
      </ul>
    </>
  );
}

export default PostsList;
