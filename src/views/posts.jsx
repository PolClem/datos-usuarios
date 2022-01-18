// grid with posts

import React, { Component, useEffect, useState } from "react";
import Post from "./post";
import getPosts from "../services/getPosts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectClasses } from "@mui/material";

// mui imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Posts = (props) => {
  // state for posts
  const posts = useSelector((state) => state.posts);
  const openAddPostDialog = useSelector((state) => state.openAddPostDialog);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  // get posts from server

  const getPostsFromServerAndAdd = async (userId) => {
    const data = await getPosts(userId);
    dispatch({ type: "GET_POST_NEW_USER", payload: data });
  };

  useEffect(() => {
    getPostsFromServerAndAdd(props.userId);
  }, [props.userId]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} body={post.body} title={post.title} />
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch({ type: "OPEN_ADD_POST_DIALOG" });
        }}
      >
        Add Post
      </Button>
      {/* dialog to add new post */}
      <Dialog
        open={openAddPostDialog}
        onClose={() => {
          dispatch({ type: "-" });
        }}
      >
        <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the title and body of the post
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={(e) => {
              dispatch({ type: "ADD_POST_TITLE", payload: e.target.value });
            }}
          />
          <TextField
            margin="dense"
            id="body"
            label="Body"
            type="text"
            fullWidth
            onChange={(e) => {
              dispatch({ type: "ADD_COMMENT", payload: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch({ type: "CLOSE_ADD_POST_DIALOG" });
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: "ADD_POST" });
              dispatch({ type: "CLOSE_ADD_POST_DIALOG" });
            }}
            color="primary"
          >
            Add Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Posts;
