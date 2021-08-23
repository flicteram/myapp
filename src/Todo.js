import React, {useContext} from 'react'
import {Context} from './Context'
 
function Todo(props){
    

    
    const {handleClick, handleDone, storage, todo, handleChange, focusInput} = useContext(Context)



    const arrayDisplay = storage.map((item, index)=>(<div className='todoItem' key={index}>
      <h3>{item}</h3>
      <button onClick={()=>handleDone(index)} className="todoDone">✔️</button>
    </div>))
  
    return (<div className='todoContainer'>
      <form>
      <input type='text' ref={focusInput} value={todo} onChange={handleChange}/>
      <button onClick={handleClick} className='todoAdd'>Add</button>
      </form>
      {arrayDisplay}
    </div>)
}

export default Todo