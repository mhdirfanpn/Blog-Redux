import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id:'1', title:"Learning redux", content:"good things" },
    { id:'2', title:"Slices", content:"How are you.." }
]

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer