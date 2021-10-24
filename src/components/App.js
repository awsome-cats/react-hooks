

import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
/* Components */
import Events from './Events'
import EventForm from './EventForm'
import Counter from './counter'
import OperationLogs from './OperationLogs'
/* Reducer */
import reducer from '../reducers'
/* Create Context */
import AppContext from '../contexts/AppContext'




const App = () => {

  const appState = localStorage.getItem('appWithRedux')
  console.log(appState)
  const initialState = appState ? JSON.parse(appState): {
    events: [],
    count: [],
    operationLogs: []
  }

  const [ state, dispatch] =  useReducer(reducer, initialState)

  //JSXのレンダリングの後に実行される
  //コンポーネントの中に何度も記述できる
  //空の配列を渡しておけば二度目に呼ばれない
  //配列の中に指定する場合は特定のパラメータのみ実行される
  // componentDidMount, componentDidUpdateに似ている
  // stateを監視してコールバックを実行させる
  // stateを保存したい => 文字列にする
  useEffect(() => {
    //console.log('I am useEffect')
    localStorage.setItem('appWithRedux', JSON.stringify(state))

  }, [state])


  return (
    <AppContext.Provider value={{ state, dispatch}}>
      <div className="container-fluid">
        <div className="mt-5">
          <EventForm />
          <Counter/>
          <Events/>
          <OperationLogs/>
        </div>

      </div>
    </AppContext.Provider>
  );
}

export default App;
