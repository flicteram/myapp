import React, {createContext, useState, useEffect, useRef} from 'react'

const Context = createContext()

function ContextProvider(props){
    const [todo, setTodo] = useState('')
    const [storage, setStorage] = useState([])
    const [completed, setCompleted] = useState([])

    const focusInput = useRef()
    

    function handleChange(e){
        setTodo(e.target.value)
    }
  
    function handleClick(e){
        e.preventDefault()
        if(todo !== ""){
        setStorage([...storage, todo])
        setTodo('')
        focusInput.current.focus()
    }
    }
    
    useEffect(()=>{
        const data = localStorage.getItem('data')
        const completedData = localStorage.getItem('completed')
        if(data){
            setStorage(JSON.parse(data))
        }
        if(completedData){
            setCompleted(JSON.parse(completedData))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(storage))
        localStorage.setItem('completed', JSON.stringify(completed))
    })

    function handleDone(index){
        setCompleted([...completed, storage[index]])
        setStorage(prevStorage=>prevStorage.filter(item=> prevStorage.indexOf(item) !== index))
    }

    function handleCompleted(index){
        setCompleted(prevCompleted=>prevCompleted.filter(item=>prevCompleted.indexOf(item) !== index))
    }
  

    return (
        <Context.Provider value={{focusInput,todo, storage, handleClick, handleDone, handleChange, completed, handleCompleted}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}