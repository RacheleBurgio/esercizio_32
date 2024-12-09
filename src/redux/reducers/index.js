//allinterno di questo ci deve andare initialState e mainReducers con solo il caso di default

const initialState = {
  favorites: {
    content: [],
  },
}

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter(
            (job) => job.id !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducers
