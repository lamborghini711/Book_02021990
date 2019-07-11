import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';
import {Link} from "react-router-dom"

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`Selected: ${value}`);
}

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
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

class SelectChapter extends Component {
  render() {
    return (
    
      <Affix offsetTop={50}>
        <div className='text-center light scroll-to-fixed-fixed width-720' id="tuan" >
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
      
    );
  }
}

export default SelectChapter;