import { createReducer, createAction } from '@reduxjs/toolkit'

export const update = createAction('UPDATE')

export const fetchTunes = (term) => async (dispatch, getState) => {
  const tunes = await fetch(`/search/${term}`)
    .then(res => res.json())
  dispatch(update(tunes))
}

export const categories = createReducer({}, {
  [update]: (state, action) => action.payload,
})

export default {
  categories
}
