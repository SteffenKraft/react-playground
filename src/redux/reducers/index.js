import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, ADD_IMAGE, LIKE_IMAGE } from '../actions'

function todos(state = [], action) {
  console.log('todos reducer called')
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function images(state = [], action) {
  console.log('image reducer called')
  switch (action.type) {
    case ADD_IMAGE:
      return [
        ...state,
        {
          url: action.url,
          likes: 0
        }
      ]
    case LIKE_IMAGE:
      return state.map((images, index) => {
        if (index === action.index) {
          return Object.assign({}, images, {
            likes: images.likes + 1
          })
        }
        return images
      })
    default:
      return state
  }
}

const app = combineReducers({
  images,
  todos
})

export default app