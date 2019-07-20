import React from 'react'
import { Icon } from 'antd';
const axios = require("axios");

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null,
            fileUploads: [],
            height: 100,
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(){
      if(this.props.reset){
        this.setState({ 
          file: null,
          fileUploads: [],
        })
      }
    }
    
    //================== upload ================================//
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
            this.state.fileUploads.push({src:urlImg})
            this.setState(this.state.fileUploads)
            if(this.props.cover){
              this.props.cover(urlImg)
            }
            if(this.props.data_SV1){
              this.props.data_SV1(this.state.fileUploads)
            }
          }).catch((error) => {
      });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    remove = e => {
      let _arr = this.state.fileUploads
      _arr.splice(e,1)
      this.setState({fileUploads:_arr})
    }

    render() {
      let buttonUpload = [];
      if(this.state.file){
        buttonUpload.push(
          <button key ={1} className="ant-btn ant-btn-primary float-right mg-left-10" type="submit"><Icon type="upload" className="pd-right-5" />Upload</button>
        )
      }
      var fileName = 'Chọn file từ máy tính';
      if(this.state.file) {
        fileName = this.state.file.name
      }
      const fileList = [];
      if(this.state.fileUploads){
        let file = this.state.fileUploads
        for(let i=0; i< file.length; i++) {
          fileList.push(
            <div className='ant-upload-list ant-upload-list-picture' key={i}>
              <div className="ant-upload-list-item ant-upload-list-item-done">
                <div className="ant-upload-list-item-info">
                  <span>
                    <img className="thumb-upload" src={file[i].src} alt='a'/>
                    <span className="pd-left-10">{file[i].src}</span>
                  </span>
                  {/* <Icon type="edit" className=""/> */}
                  <Icon type="close" className="antion antion-close" onClick={this.remove.bind(null, i)}/>
                </div>
              </div>
            </div>
          )
        }
      }
      
      return (
        <div>
          <form onSubmit={this.onFormSubmit} className="upload width-100" >
              <label className="ant-btn  inline mg-right-10"><Icon type="plus" />
                <input type="file" name="bookImage" onChange= {this.onChange} accept="image/x-png,image/gif,image/jpeg" />
              </label>
              {fileName}
              {buttonUpload}
              <br/>
              <div className='row mg-all-0'>
                {fileList}
              </div>
          </form>
        </div>
      )
    }
}

export default ReactUploadImage;