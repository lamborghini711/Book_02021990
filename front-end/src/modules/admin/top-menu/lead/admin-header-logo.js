import React, { Component } from 'react';

class AdminHeaderLogo extends Component {
  constructor(props){
    super(props)
    this.text = props.text
  }
  render() {
    return (
      <div className='top-menu-lead'>
        <img className='logo' src='/image/wp-logo-orange.png' alt='logo' />
      </div>
    );
  }
}

export default AdminHeaderLogo;