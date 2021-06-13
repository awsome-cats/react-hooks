import { combineReducers } from 'redux'
import events from './events'
import count from './count'

export default combineReducers({events, count})

