import React, { Component } from 'react'
import Counter from './Componets/Counter'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={show:true}
   
  }
  HandleClick=()=>{
this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div>
      <button  onClick={this.HandleClick}>show</button>
{this.state.show ? <Counter/>: null}
      </div>
    )
  }
}

