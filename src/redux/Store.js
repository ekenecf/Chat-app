import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import DashboardReducer from './DashboardReducer'

const rootReducer = combineReducers({
    DashboardReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
