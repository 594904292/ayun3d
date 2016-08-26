import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import headerReducer from 'routes/Header'

export const makeGlobalState = (asyncReducers) => {
  if(asyncReducers)
    asyncReducers['dock_isopen'] = headerReducer
}

export const makeRootReducer = (asyncReducers) => {
  makeGlobalState(asyncReducers)
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
