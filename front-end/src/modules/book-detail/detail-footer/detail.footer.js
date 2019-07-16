import React, { Component } from 'react';
import Chat from './../comment/comment'
// import { FacebookProvider, Comments, Like } from 'react-facebook';

class DetailFooter extends Component {
  render() {
    return (
      <div className="text-center bg-white width-720 mg-0-auto pd-tb-20 resonse-content-header">
        <Chat/>
          {/* <FacebookProvider appId="1303738086468516">
            <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
          </FacebookProvider>
          <FacebookProvider appId="1303738086468516" >
            <Comments href="http://www.facebook.com" orderBy="reverse_time"/>
          </FacebookProvider> */}
      </div>
    );
  }
}

export default DetailFooter;