import React, {Component} from 'react';

class App extends Component{
  state={
    title:""
  }

  componentDidMount=()=>{
   fetch("api", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      })
    .then(res => res.json())
     .then(res=> this.setState({title:res})
      )
    .catch(err=> console.log(err))} 
render()
 { return (
    <div>
      <h1>{this.state.title}</h1>
    </div>
  );}
}

export default App;
