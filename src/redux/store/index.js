//al suo interno assegna l'invocazione di "configureStore" ad una variabile ed esportala
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const myReduxStore = configureStore({
  reducer: mainReducer,
})
export default myReduxStore
