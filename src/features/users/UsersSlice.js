import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: "Irfan"},
    {id:'1', name: "Alparslan"},
    {id:'2', name: "Melikshah"},
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;