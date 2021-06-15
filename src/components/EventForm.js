


import React, {useState, useContext} from 'react'
import { 
  CREATE_EVENT, 
  DELETE_ALL_EVENTS, 
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions/index'

/* useContext File */
import AppContext from '../contexts/AppContext'

/** date format */
import { timeCurrentIso8601 } from '../utiles'

const  EventForm = () =>{

  /* props経由ではなくuseContextで受け取る */
  const { state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // click event
  // dispatch(action)
  // action = {type: 'CREATE_EVENT', title, body}が必要

  const addEvent = (e) => {
    
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title, 
      body
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601()
    })
 
    setTitle('')
    setBody('')
    console.log({state})
    
  }

  /**全てのイベントを削除する */
  const deleteAllEvents = (e) => {

    e.preventDefault()
    const result = window.confirm('全てのイベントを削除していいですか')
    
    if (result){
        dispatch({
        type: DELETE_ALL_EVENTS
      })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601()
      })
    }
    
  }


  const deleteAllOperationLogs = (e) => {
    e.preventDefault()

    const result = window.confirm('全ての操作ログを削除してもいいですか')

    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }

  /** ボタンの状態であるactive disabledを管理する */
  const unCreatable = title === '' || body === ''


  /**Counter start */

//   const addCount = useCallback(() => 
//     // dispatch({
//     //   type: 'INCREMENT'
//     // })
//     setCount(previousCount => previousCount + 1),[])



  /**Counter end */

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div 
                    className="form-group">
                    <label 
                        htmlFor="formEventTitle">
                        タイトル
                    </label>

                    <input 
                        className="form-control" 
                        id="formEventTitle" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">
                    ボディ
                    </label>
                    <textarea 
                        className="
                        form-control 
                        mb-3" 
                        id="formEventBody" 
                        value={body} 
                        onChange={(e) => setBody(e.target.value)}
                    />
                    
                    <button 
                        className="btn btn-primary"
                        disabled={unCreatable}
                        onClick={addEvent}>
                        イベント新規作成
                    </button>

                    <button 
                        className="btn btn-danger"
                        onClick={deleteAllEvents}
                        disabled={state.events.length === 0}
                        >
                        イベント全削除
                    </button>
                    <button 
                        className="btn btn-danger"
                        onClick={deleteAllOperationLogs}
                        disabled={state.operationLogs.length === 0}
                        >
                        全操作ログの削除
                    </button>
                    

                </div>

                
            </form>  
        </>
    )
}

export default EventForm
