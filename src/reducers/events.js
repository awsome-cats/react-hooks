// どんなreducerか
// const events = {id: 1, title: 'タイトル', body: 'ボディ1'}
// clickEventでデータを作成し,追加する
// action = { type: 'CREATE_EVENT', title: '', body: ''}
/*
1.reducerか受け取るデータ
1-1.state
1-2.action

2.actionの中身とは
2-1.オブジェクトで
{
    type:'xxx',
    title: 'xxxx
    body: 'xxxxx'
}

*/
import {
   DELETE_EVENT,
   CREATE_EVENT ,
   DELETE_ALL_EVENTS
} from '../actions'

const events =(state = [], action) => {

    switch(action.type) {
        case CREATE_EVENT:
            const event = {title: action.title, body: action.body}

            const length = state.length
            const id = length === 0 ? 1: state[length -1].id + 1
            console.log('state', state)
            return [...state, {id, ...event }]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)

        case DELETE_ALL_EVENTS:
            return []
        default:
        return state
    }

}

export default events
