import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// REDUX ACTIONS
export const setPosts = createAction('setposts')

export const fetchPosts = () => async (dispatch, getstate) => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
  dispatch(setPosts(posts))
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const reset = createAction('persist/reset')


// REDUX REDUCERS
export const postsReducer = createReducer([], {
  [setPosts]: (state, action) => [...state, ...action.payload],
})

export const countReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
  [reset]: (state, action) => action.payload
})

export default combineReducers({ posts: postsReducer, count: countReducer })