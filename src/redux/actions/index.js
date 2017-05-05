/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const ADD_IMAGE = 'ADD_IMAGE'
export const LIKE_IMAGE = 'LIKE_IMAGE'

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function addImage(url) {
  return { type: ADD_IMAGE, url }
}

export function likeImage(index) {
  return { type: LIKE_IMAGE, index }
}