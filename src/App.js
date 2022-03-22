import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    console.log('Constructor()')
    super(props)
    this.state ={
      count:0,
      timer:10,
      timer1:5,
      interval:null,
      inter:0
    }
  }

  increment = ()=>{
    this.setState({count:this.state.count +1})
  }

  decrement = ()=>{
    console.log("before",this.state.timer)
    console.log("before",this.state.interval)
    this.setState({count:this.state.count -1})
  }
  componentDidMount(){
    console.log("after",this.state.timer)
    console.log("after",this.state.interval)
    console.log("componentDidMount()");
    this.setState({interval:setInterval(()=>{
      this.setState({timer1:this.state.timer+1})
    },5000)})
setInterval(() => {
   this.setState({timer:this.state.timer+1})
   this.setState({inter:this.state.inter+1})
}, 3000);
    console.log("after",this.state.timer)
    console.log("after",this.state.interval)
  }


  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount")
  // }

  
  render() {
    console.log("render()")
    console.log(this.state.interval)
    return (
      <div>
        <h1>WS-State</h1>
        <button onClick={this.decrement} >-</button>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}>+</button>
        <h2> {this.state.timer1} </h2>
       <h2> {this.state.timer} </h2>
       <h2> {this.state.inter} </h2>
      </div>
    )
  }
}

export default App