// actions

const initstate = {
  //list of posts
  posts: [],
  // text of new post
  post: {},
  // name of user
  title: "",
  // modal
  openAddPostDialog: false,
  // comment
  comment: "",
};

// action types

const GET_POST_NEW_USER = "GET_POST_NEW_USER";
const ADD_POST = "ADD_POST";
const ADD_POST_TITLE = "ADD_POST_TITLE";
const ADD_COMMENT = "ADD_COMMENT";
const OPEN_ADD_POST_DIALOG = "OPEN_ADD_POST_DIALOG";
const CLOSE_ADD_POST_DIALOG = "CLOSE_ADD_POST_DIALOG";

// action creators
/* export const getPostNewUser = (post) => {
  return {
    type: GET_POST_NEW_USER,
    post,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

export const addPostTitle = (title) => {
  return {
    type: ADD_POST_TITLE,
    title,
  };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

export const openAddPostDialog = () => {
  return {
    type: OPEN_ADD_POST_DIALOG,
  };
};

export const closeAddPostDialog = () => {
  return {
    type: CLOSE_ADD_POST_DIALOG,
  };
}; */

// reducer

export default function reducer(state = initstate, action) {
  switch (action.type) {
    case GET_POST_NEW_USER:
      return {
        ...state,
        posts: [action.payload],
      };

    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            title: state.title,
            body: state.comment,
          },
        ],
      };
    case ADD_POST_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case OPEN_ADD_POST_DIALOG:
      console.log(action.payload);
      return {
        ...state,
        openAddPostDialog: true,
      };
    case CLOSE_ADD_POST_DIALOG:
      console.log(action.payload);
      return {
        ...state,
        openAddPostDialog: false,
      };
    default:
      return state;
  }
}
