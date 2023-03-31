import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.unshift(action.payload)
    },
  },
})

// ACTIONS son creadas automáticamente con el mismo nombre por createSlice()
export const { addPost } = postsSlice.actions

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
