

import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
/* Components */
import Events from './Events'
import EventForm from './EventForm'
import Counter from './counter'
/* Reducer */
import reducer from '../reducers/index.js'
/* Create Context */
import AppContext from '../contexts/AppContext'




const App = () => {
  
  const [ state, dispatch] =  useReducer(reducer, [])

  
  return (
    <AppContext.Provider value={{ state, dispatch}}>
      <div className="container-fluid">
        
        <div className="mt-5">
          <EventForm />
          <Counter/>
          <Events/>
        </div>

      </div>
    </AppContext.Provider>
  );
}

export default App;
