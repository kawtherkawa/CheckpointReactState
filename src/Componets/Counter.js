import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0}
        this.person={name:'kawther',job:'web developpement',pic:'https://www.macapflag.com/blog/wp-content/uploads/2021/05/le-metier-de-developpeur-870x600.jpg'}
      }
componentDidMount(){
  setInterval(()=>{
this.setState(prevState=>({count:prevState.count+1}))    
  },1000)//chaque seconde
}
  render() {
    return (

      <div><h2>{this.person.name}</h2>
      <h2>{this.person.job}</h2>
      <img src={this.person.pic} alt='web' style={{width:'300px'}}/>
      <h2> {this.state.count}</h2>
      </div>
    )
  }
}
