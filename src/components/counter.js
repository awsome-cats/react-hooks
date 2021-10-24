

import React, {useState, useReducer} from 'react'
import reducer from '../reducers/count'
import { INCREMENT } from '../actions'

const initialState = {
    count: 0
}

const  Counter = () => {


    // const [ count, setCount ] = useState(0)
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const addCount = () => {
        dispatch({
            type: INCREMENT
        })
        console.log('state', state)
        // setCount(previousCount => previousCount + 1)
    }

    return (
        <div>
            <button
                className="btn btn-info"
                type="button"
                onClick={addCount}
                >click</button>
            {state.count}
        </div>
    )
}

export default Counter
