// どんなreducerか
// const events = {id: 1, title: 'タイトル', body: 'ボディ1'}
// clickEventでデータを作成し,追加する
// action = { type: 'CREATE_EVENT', title: '', body: ''}

import { 
   DELETE_EVENT,
   CREATE_EVENT ,
   DELETE_ALL_EVENTS
} from '../actions'

const events =(state = [], action) => {
    switch(action.type) {
        case CREATE_EVENT:
            
            const event = {
                title: action.title, 
                body: action.body,
                radioVal: action.radioVal,
                checked: action.checked,
                selectValue: action.selectValue
            }

            const length = state.length
            const id = length === 0 ? 1: state[length -1].id + 1
            return [...state, {id, ...event }]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)  
            
        case DELETE_ALL_EVENTS:
            return []
        
        // case INCREMENT:
        //     const count = action.count
        //     return count + 1
        default: 
        return state
    }

}

export default events