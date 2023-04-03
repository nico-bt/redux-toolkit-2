import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: "0", name: "Thom Yorke" },
  { id: "1", name: "Obi Wan" },
  { id: "2", name: "Brad" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

// ACTIONS son creadas automáticamente con el mismo nombre por createSlice()
export const {} = usersSlice.actions

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
