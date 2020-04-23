import React, { Component } from 'react'
import {Header} from './components/header/header.component'
import InputBox from './components/input/input.component'
import './App.css'

class App extends Component{
  constructor(){
    super()
    
    this.state = {
      items:[]
    }
  }
  
  
  render(){
    return(
      <div className = "App">
        <Header/>
        <InputBox/>
      </div>
    )
  }
}

export default App;
