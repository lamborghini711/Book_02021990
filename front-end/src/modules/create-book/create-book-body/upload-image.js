import React from 'react'
import {connect} from 'react-redux';
import {UPLOAD_IMG} from '../../../redux/action/admin/book-actions';
const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('bookImage',this.state.file);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("http://localhost:5000/api/upload",formData,config)
          .then((response) => {
            var urlImg = response.data.slice(17);
            console.log(urlImg)
          }).catch((error) => {
      });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="bookImage" onChange= {this.onChange} accept="image/x-png,image/gif,image/jpeg" />
                <button type="submit">Upload</button>
            </form>
          
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.listBooks.bookData.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    imgStore: (formData,config) => {
      dispatch({ type : UPLOAD_IMG, formData, config})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactUploadImage);