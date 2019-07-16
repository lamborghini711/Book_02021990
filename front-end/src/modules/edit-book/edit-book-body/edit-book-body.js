import React, { Component } from 'react';
import ReactUploadImage from './upload-image';
import { Tag, Input, Icon, Button } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

const { TextArea } = Input;


class EditBookBody extends Component {
  //=========================== start tag =================================//
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  //=========================== end tag =================================//

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);

    return (
      <div className="content-wrapper min-height-page  ">
        <div className="create-title pd-all-30">Tạo truyện tranh mới</div>

        <div className="mg-0-auto pd-tb-10" style={{width:'900px'}}>
          <form className="form-inline">
            <label className="text-style font-700">Tên truyện</label>
            <input type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tên khác</label>
            <input type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Country</label>
            <input type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Năm</label>
            <input type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tác giả</label>
            <input type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="checkbox-inline text-style pd-all-0 font-700">Truyện hot</label>
            <label className="container-create">
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          <form className="form-inline mg-top-20 ">
            <label className="checkbox-inline text-style pd-all-0 font-700">Truyện đề cử</label>
            <label className="container-create">
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          {/* start tag */}
          <form className="form-inline mg-top-20 mg-bottom-20">
            <label className="text-style font-700">Thể loại</label>
            <div className="inline" style={{ marginBottom: 16 }}>
              <TweenOneGroup
                enter={{
                  scale: 0.8,
                  opacity: 0,
                  type: 'from',
                  duration: 100,
                  onComplete: e => {
                    e.target.style = '';
                  },
                }}
                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                appear={false}
              >
                {tagChild}
              </TweenOneGroup>
            </div>
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 100 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag onClick={this.showInput} style={{ background: '#272727', color:'#cdcdcd', border: '1px dashed #636363', cursor: 'pointer' }}>
                <Icon type="plus" /> New Tag
              </Tag>
            )}
          </form>
          {/* end tag */}
          <div className="row mg-top-20 mg-all-0" style={{borderTop: '1px solid #272727', borderBottom: '1px solid #272727', height:'260px', paddingTop:'20px'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700">Ảnh bìa</div>
            <div className="col-md-9 inline content-upload">
              <ReactUploadImage/>
            </div>
          </div>
          <br/>
          <form className="form-inline mg-bottom-20">
            <label className="text-style pd-all-0 font-700">Nội dung truyện</label>
            <TextArea rows={4} />
          </form>

          <div className="row mg-all-0 pd-top-20" style={{borderTop: '1px solid #272727',  minHeight:'260px'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700">Chương 0</div>
            <div className="col-md-9 content-upload">
              <ReactUploadImage/>
            </div>
          </div>
            
          <div className="text-right">
            <Button  style={{margin:'60px 0 50px 0'}}>
              Tạo truyện
            </Button>
          </div>
          
       
        </div>
      </div>
    );
  }
}

export default EditBookBody;