import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';

require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: '78fL2sdV5EYAAAAAAAB4YzI1PihGoDhgofOWjfy3rMSX-H47D7iUHDu2c_nqq975' });



//============================= parse link share ==============//
// dbx.sharingCreateSharedLink({path: "/data/2019/001.jpg"})
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//=========== parse link download ==========================//
  // dbx.filesGetTemporaryLink({path: "/data/2019/001.jpg"})
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });

//========= create folder ========================//
// dbx.filesCreateFolderV2({path: "/data/2018"})
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(error) {
//   console.log(error);
// });

//========= delete folder ============//
// dbx.filesDeleteV2({path: "/data/2018"})
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(error) {
//   console.log(error);
// });

//========= delete folder ============//
// dbx.usersGetSpaceUsage()
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(error) {
//   console.log(error);
// });
  
//========= upload file ============//
function createDropbox(val){
  if(val) {
    console.log(val)
    dbx.filesUpload(
      {
        contents : {val},
        path : 'data/2018'
      }
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  
}




// ant upload

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}


class CreateBookBody extends Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
        
      );
    }
  };
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    createDropbox(imageUrl)
    return (
      <div className="content-wrapper min-height-page ">
         <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
      </div>
    );
  }
}

export default CreateBookBody;