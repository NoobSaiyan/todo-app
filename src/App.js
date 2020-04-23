import React, { Component } from 'react'
import {Header} from './components/header/header.component'
import InputBox from './components/input/input.component'
import {List} from './components/todo-list/todo-list.component'
import './App.css'

class App extends Component{
  constructor(){
    super()
    
    this.state = {
      items:[]
    }
  }
  addItem = item => {
    this.setState(prev => ({items: prev.items.concat(item)}))
  }
  render(){
    return(
      <div className = "App">
        <Header/>
        <InputBox addItem = {this.addItem} />
        <List items = {this.state.items}/>
      </div>
    )
  }
}

export default App;
