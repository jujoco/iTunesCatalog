import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './store/reducers'

export const App = () => {
  const posts = useSelector(state => state.posts)
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useEffect(() => {
    document.title = `count is now ${count}`
  }, [count])

  // get local data
  useEffect(() => {
    const rawData = localStorage.getItem('store')
    const number = JSON.parse(rawData)
    if (typeof number !== 'number') return
    dispatch({ type: 'persist/reset', payload: number })
  }, [])

  // set local data
  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(count))
  }, [count])

  const up = () => {
    dispatch({ type: 'INCREMENT', payload: 1 })
  }

  const down = () => {
    dispatch({ type: 'DECREMENT', payload: 1 })
  }

  return (
    <div>
      <h1>my clicks {count}</h1>
      <button onClick={() => up()}>up</button>
      <button onClick={() => down()}>down</button>

      <h1>my posts</h1>
      <ul>
        {posts.map((post, i) => <li key={i}>{post.body}</li>)}
      </ul>
    </div>
  )
}
