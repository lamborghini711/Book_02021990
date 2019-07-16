import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import RouterUrl from './modules/router';

class App extends Component  {
  state={
    isOff : null,
  }
  handelM = e => {
    if(document.getElementById("off-menu")){
      var element = document.getElementById("off-menu");
      if(e === true) {
        element.classList.add("sidebar-collapse");
      } else {
        element.classList.remove("sidebar-collapse");
      }
    }
  }
  render() {
    if(this.props.handleMenu.offMenu){
      let checkOff = this.props.handleMenu.offMenu.data.offMenu;
      this.handelM(checkOff);
    }
    return (
      <div className="sidebar-mini wysihtml5-supported sidebar-mini-expand-feature skin-blue fixed " id="off-menu">
      <div className="wrapper">
          <RouterUrl/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    handleMenu: state.userReducer
  }
}


export default connect(mapStateToProps)(App);
