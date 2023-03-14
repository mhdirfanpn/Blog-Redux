import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id:'1', title:"Learning redux", content:"good things" },
    { id:'2', title:"Slices", content:"How are you.." }
]

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload) 
        },
        prepare(title,content){
            return{
                payload:{
                    id: nanoid,
                    title,
                    content
                }
            }
        }
    }
}
})

export const selectAllPosts = (state) => state.posts

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer