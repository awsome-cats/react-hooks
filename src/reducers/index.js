import { combineReducers } from 'redux'
import events from './events'
import count from './count'
import operationLogs from './operationLogs'
export default combineReducers({events, count, operationLogs})

