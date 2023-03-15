import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";


const initialState = [
    { id:'1',
     title:"Learning redux",
     content:"good things",
     date:sub(new Date(),{minutes: 15}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     }
     },
    { id:'2',
     title:"Slices",
     content:"How are you..",
     date:sub(new Date(),{minutes: 8}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     }
    }
]

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload) 
        },
            prepare(title,content,userId){
                return{
                    payload:{
                        id: nanoid,
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state,action){
            const {postId,reaction} = action.payload
            const ExistingPost = state.find(post => post.id===postId)
            if(ExistingPost){
                ExistingPost.reactions[reaction]++
            }
        }
}
})

export const selectAllPosts = (state) => state.posts

export const {postAdded, reactionAdded} = postsSlice.actions

export default postsSlice.reducer