import React,{Component} from "react";

import dashboardHelper from "../../services/dashboardHelper"
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    token: state.authorization.token,
    firstname:state.authorization.firstname
    
  };
}
class Dashboard extends Component{
state={
account:{
    firstname: "",
    lastname:""  
},

}

componentDidUpdate(prevProps) {

  if (this.props.token !== prevProps.token) {
    this.getAccountData(this.props.token)
  }


}
 getAccountData =(props)=>{
  dashboardHelper(props)
.then((res)=> this.setState(
  {  account:{
        firstname: res.data.firstname,
        lastname: res.data.lastname
    }}
))
.catch(err => console.log(err))
} 

render (){   
       
    return(

<div className="dash-container"> 

<h1>Welcome , {this.state.account.firstname } </h1>


   </div>
 

        
    )}
 }

export default connect(mapStateToProps)(Dashboard);
 
