import React from 'react'
import {Link} from 'react-router-dom'

function Header(){

    return(
        <header>
            <Link to="/"><h2>Add Todo</h2></Link>
            <Link to="/completed"><h2>Completed</h2></Link>
        </header>
    )
}

export default Header