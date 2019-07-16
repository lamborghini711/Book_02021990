import React, { Component } from 'react';

class AdminFooter extends Component {
  render() {

    return (
     <div>
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>Copyright © 2014-2016.</strong> All rights
        reserved.
      </footer>
     </div>
    );
  }
}

export default AdminFooter;