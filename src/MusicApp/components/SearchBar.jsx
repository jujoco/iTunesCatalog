import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTunes } from '../store/reducers'

export const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(fetchTunes(value))
    setValue('')
  }
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}
