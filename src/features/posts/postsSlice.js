import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.unshift(action.payload)
      },
      // Prepare callback, get data to format first
      prepare(title, content, userId) {
        return {
          payload: {
            title,
            content,
            id: nanoid(),
            userId,
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
          },
        }
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
})

// ACTIONS son creadas automáticamente con el mismo nombre por createSlice()
export const { addPost, addReaction } = postsSlice.actions

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
