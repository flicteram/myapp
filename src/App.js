import React from 'react'
import Todo from './Todo'
import Header from './Header'
import Completed from './Completed'
import {Switch, Route} from 'react-router-dom'


 
function App (){
    return(
      <div className="container">
      <Header/>

      <Switch>
        <Route exact path='/'> 
          <Todo/>
        </Route>

        <Route path="/completed">
          <Completed/>
        </Route>
      </Switch>
      </div>


    )
}

export default App