import  React, { Component } from  'react';
import { connect } from  'react-redux';
import { withRouter } from  'react-router';

export  default  function (ComposedComponent) {
    class  Authentication  extends  Component {
        
        componentDidMount() {
            if (!this.props.authenticated)
                this.props.history.push('/');
        }
        componentDidUpdate() {
            if (this.props.authenticated)
                this.props.history.push('/dashboard');
       }
        render() {

            return  <ComposedComponent  {...this.props}  />
        }
    }

    const   mapStateToProps=(state)=> {
        return { authenticated:  state.authorization.token };
    }
    return connect(mapStateToProps)(withRouter(Authentication));
}


