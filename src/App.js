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

  editItem = (text, id) =>{
    let edit = this.state.items
    let change = text
    edit[id] = change
    this.setState(prevState => ({ items:  edit}))
  }

  delItem = id => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
    const filteredItems = this.state.items.filter(item => {
      return (item !== id)
    })
    this.setState( {items: filteredItems} )
  }
  

  render(){
    console.log("# "+this.state.items)
    return(
      <div className = "App">
        <Header/>
        <InputBox addItem={this.addItem} />
        <List items={this.state.items}  delete={this.delItem} editItem={this.editItem}/>
      </div>
    )
  }
}

export default App;
