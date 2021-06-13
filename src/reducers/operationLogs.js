import { 
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOG 
 } from '../actions'

 const operationLogs = (state = [], action) => {

    switch(action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = { 
                description: action.description, 
                operatedAt: action.operatedAt
            }

            return [operationLog, ...state]

        case DELETE_ALL_OPERATION_LOG:
            return []
        default: 
        return state
    }

 }

 export default operationLogs