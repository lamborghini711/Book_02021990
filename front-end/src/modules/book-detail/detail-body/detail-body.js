import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';
import {Link} from "react-router-dom"
const { Option } = Select;

class DetailBody extends Component {
  render() {
  let item = this.props.data;
  var listImg = [];
  var children = [];
  var lastScrollTop = 0;
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  if(item) {
    for(let j in item.data_SV1){
      if(item.data_SV1[j].chapter_number === parseInt(this.props.param.chapter)) {
        let data = item.data_SV1[j];
        for (let i = 0; i< data.image.length; i++) {
          let item = data.image[i].src;
          listImg.push(
            <div key={i}>
              <img className='width-720' src={item} alt="a"/>
            </div>
          )
        }
      }
    }
  }

  // or window.addEventListener("scroll"....
  window.addEventListener("scroll", function(){ 
    let st = window.pageYOffset || document.documentElement.scrollTop;
    var element = document.getElementById("tuan");
    if (st > lastScrollTop){
      element.classList.add("scroll-down");
      element.classList.remove("scroll-up");
    } else {
      element.classList.remove("scroll-down");
      element.classList.add("scroll-up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);
    
  return (
      <div className='width-720 mg-0-auto '>
        <div style={{marginTop:'20px'}} id="tuan">
          <Affix offsetTop={50}>
              <div className='text-center light scroll-to-fixed-fixed width-720'  >
                <Link to="/">
                <Icon className='mg-right-10 text-left' style={{fontSize:'20px', color:'#121212'}} type="home" theme="filled" />
                </Link>
                <Icon className='mg-right-10' style={{fontSize:'20px', color:'#121212'}} type="redo" />
                <Button className='mg-right-10' shape="circle" icon="arrow-left" />
                <Select size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200, marginRight:'10px' }}>
                  {children}
                </Select>
                <Button className='mg-right-10' shape="circle" icon="arrow-right" />
              </div>
          </Affix>
        </div>
        {listImg}
      </div>
    );
  }
}

export default DetailBody;