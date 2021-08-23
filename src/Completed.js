import React, {useContext} from 'react'
import {Context} from './Context'

function Completed(){
    const {completed, handleCompleted} = useContext(Context)

    const displayItems = completed.map((item, index)=>(
        <div key={index} className='completedItem'>
           <h3>{item}</h3>
           <button onClick={()=>handleCompleted(index)} className="completedButton">DELETE</button> 
        </div>
    ))

    return (
        <div className='completedContainer'>
        <h1>✅ Completed tasks ✅</h1>
        {displayItems}
        </div>
    )
}

export default Completed