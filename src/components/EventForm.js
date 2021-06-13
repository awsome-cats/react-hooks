


import React, {useState} from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions/index'

const  EventForm = ({ state, dispatch}) =>{



  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [radioVal , setRadioVal ] = useState('猫派')
  const [checked, setChecked] = useState(['狐'])
  const [selectValue, setSelectValue] = useState('')
  const [isPending, setIsPending] = useState(false)
  console.log('state', state)


  /**Radio button */

  const handleChange = (e) => {
    setRadioVal(e.target.value)
  }

  /** CheckBox */

  const handleCheckBox = (e) => {

    if (checked.includes(e.target.value)) {
      setChecked(checked.filter(item => item !== e.target.value))
    }else {
      setChecked([...checked, e.target.value])
    }

  }


  /** SelectBox */

  const handleSelectBox = (e) => {
    setSelectValue(e.target.value)
  }


  // click event
  // dispatch(action)
  // action = {type: 'CREATE_EVENT', title, body}が必要
  const addEvent = (e) => {
    
    e.preventDefault()
    setIsPending(true)

    dispatch({
      type: CREATE_EVENT,
      title, 
      body,
      radioVal,
      checked,
      selectValue
      
    })

    

    const posts = {
      title,
      body,
      radioVal,
      checked,
      selectValue
    }

    console.log('posts', posts)
  

    fetch('http://localhost:5000/api/vi/create', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(posts)
    })
    .then(() => {
      console.log('request data')
          setIsPending(false)
    })
 
    setTitle('')
    setBody('')
    setRadioVal('猫派')

  
    
  }

  /**全てのイベントを削除する */
  const deleteAllEvents = (e) => {

    e.preventDefault()
    const result = window.confirm('全てのイベントを削除していいですか')
    
    if (result)dispatch({
      type: DELETE_ALL_EVENTS
    })
    
  }

  /** ボタンの状態であるactive disabledを管理する */
  const unCreatable = title === '' || body === ''




    return (
        <>
            <h4>イベント作成フォーム</h4>

            <form>
              {/* input */}
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
                
                {/* radio */}
                <div className="border">
                    <p>選択してください</p>
                    <div 
                        className="
                          form-group
                          form-check"
                        >
                          <input 
                              type="radio" 
                              className="
                              form-radio-input" 
                              id="exampleRadio1"
                              value='猫派'
                              checked={radioVal === '猫派'}
                              onChange={handleChange}
                            />
                          <label 
                              className="
                              form-check-label" 
                              htmlFor="exampleRadio1"
                              >
                                猫派
                          </label>
                      
                    </div>

                
                    {/* radio */}
                    
                    <div 
                        className="
                          form-group 
                          form-check"
                        >
                          <input 
                              type="radio" 
                              className="
                              form-radio-input" 
                              id="exampleRadio2"
                              value='犬派'
                              checked={radioVal === '犬派'}
                              onChange={handleChange}
                            />
                          <label 
                              className="
                              form-check-label" 
                              htmlFor="exampleRadio2"
                              >
                                犬派
                          </label>
                      </div>
                    </div>
                  
                    <div className="border mt-3">
                    <p>選択してください</p>
                    
                    
                    {/* checkBox */}
                    <div 
                      className="
                        form-group 
                        form-check
                        ml-4"
                      >
                        
                        <input 
                            type="checkbox" 
                            className="
                            form-check-input" 
                            id="exampleCheck1"
                            value='狐'
                            checked={checked.includes('狐')}
                            onChange={handleCheckBox}
                          />
                        <label 
                            className="
                            form-check-label" 
                            htmlFor="exampleCheck1"
                            >
                              狐
                              
                        </label>
                      </div>
                      {/* checkBox */}
                      <div className="form-group form-check ml-4">
                        <input 
                            type="checkbox" 
                            className="
                            form-check-input" 
                            id="exampleCheck2"
                            value='猪'
                            checked={checked.includes('猪')}
                            onChange={handleCheckBox}
                          />
                        <label 
                            className="
                            form-check-label" 
                            htmlFor="exampleCheck2"
                            >
                              猪
                        </label>
                      </div>
                      
                      {/* checkBox */}
                      <div className="form-group form-check ml-4">

                        <input 
                            type="checkbox" 
                            className="
                            form-check-input" 
                            id="exampleCheck3"
                            value='ウサギ'
                            checked={checked.includes('ウサギ')}
                            onChange={handleCheckBox}
                          />
                          <label 
                              className="
                              form-check-label" 
                              htmlFor="exampleCheck3"
                              >
                                ウサギ
                                
                          </label>

                      </div> 
                    </div>


                  
                    {/* textarea */}
                    <div className="form-group mt-3">
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
                    </div>

                    {/* selectbox */}

                    <div className="form-group">
                      <p>どれか一つ選択してください</p>
                      <select className="form-control"  value={selectValue} onChange={handleSelectBox} multiple={false}>
                        <option value="">選択してください</option>
                        <option value="アドレス">アドレス</option>
                        <option value="マイリンク">マイリンク</option>
                        <option value="施設予約">施設予約</option>
                        <option value="メール">メール</option>
                      </select>
                      <p>選択値: {selectValue}</p>
                    </div>

                    <div className="form-group ">
                        { !isPending &&<button 
                            className="btn btn-primary"
                            disabled={unCreatable}
                            onClick={addEvent}>
                            イベント新規作成
                        </button>}
                        { isPending &&<button 
                            className="btn btn-primary"
                            disabled={unCreatable}
                            onClick={addEvent}>
                            イベント新規作成.....
                        </button>}

                        { !isPending && <button 
                            className="btn btn-danger"
                            onClick={deleteAllEvents}
                            disabled={state.length === 0}
                            >
                            イベント全削除
                        </button>}
                        { isPending && <button 
                            className="btn btn-danger"
                            onClick={deleteAllEvents}
                            disabled={state.length === 0}
                            >
                            イベント全削除.....
                        </button>}
                    </div>
            </form>  
        </>
    )
}

export default EventForm
