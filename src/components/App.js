// import '../App.css';



import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Events from './Events'
import EventForm from './EventForm'
import Counter from './counter'
import reducer from '../reducers/index.js'


const App = () => {
  
  const [ state, dispatch] =  useReducer(reducer, [])

  
  return (
    <div className="container-fluid">
      
      <div className="mt-5">
        <EventForm state={state} dispatch={dispatch}/>
        <Counter/>
        <Events state={state} dispatch={dispatch}/>
      </div>

    </div>
  );
}

export default App;
