import React from 'react'
import { Icon, Empty } from 'antd';
const axios = require("axios");

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null,
            fileUploads: [],
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
        if(file.length === 0) {
          fileList.push(<Empty key={1} style={{marginTop: '15px'}} />)
        } else {
          for(let i=0; i< file.length; i++) {
            fileList.push(
              <div className='ant-upload-list ant-upload-list-picture' key={i}>
                <div className="ant-upload-list-item ant-upload-list-item-done">
                  <div className="ant-upload-list-item-info">
                    <span>
                      <img className="thumb-upload" src={file[i].src} alt='a'/>
                      <span className="pd-left-10">{file[i].src}</span>
                    </span>
                    <Icon type="edit" className=""/>
                    <Icon type="close" className="antion antion-close"/>
                  </div>
                </div>
              </div>
            )
          }
        }
      }

      return (
          <div>
            <form onSubmit={this.onFormSubmit} className="upload width-100" >
                <label className="ant-btn ant-btn-default inline mg-right-10"><Icon type="plus" />
                  <input type="file" name="bookImage" onChange= {this.onChange} accept="image/x-png,image/gif,image/jpeg" />
                </label>
               {fileName}
               {buttonUpload}
            </form>
            <br/>
            <div className='row mg-all-0'>
              {fileList}
            </div>
          </div>
        
      )
    }
}

export default ReactUploadImage;