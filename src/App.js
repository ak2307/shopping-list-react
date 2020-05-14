import React, { Component } from 'react';
import './App.css';
import Heading from "./Heading.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      list: []

    }
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
    console.log(this.state.input);
  }

  addItem(e) {
    e.preventDefault();
    this.state.input !== "" && this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }
  
  removeItem(item){
    let newList = this.state.list.filter(otherItems => otherItems !== item)
    this.setState({
      list: [...newList]
    })
  }



  render() {
    const { list,input } = this.state;
    return (
      <div className="App">
        <Heading />
        <form onSubmit = {this.addItem}>
          <input type ="text" value ={input} onChange ={this.handleChange} placeholder= "Please type item name here..." style = {{width: 450}}/>
          <div>
            <button type="submit">Add to Shopping List</button>
          </div>
          <ul>
            {list.map((item,index) => 
            <div>
              <li key = {index}>{item}{' '}
              <button onClick = {(e) =>this.removeItem(item)}>
              delete
              </button>
                </li>
                </div>
            )}
          </ul>            
        </form>
      </div>
    )
  }
}

export default App;
