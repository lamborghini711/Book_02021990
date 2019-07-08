import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const listImg = [];

let body = [
  'img/items/1.jpg','img/items/2.jpg','img/items/3.jpg'
]
for (let i = 0; i< body.length; i++) {
  let item = body[i];
  console.log(item)
  listImg.push(
    <div key={i}>
      <img className='width-720' src={item} alt="a"/>
    </div>
  )
}
function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class DetailBody extends Component {
  render() {
    return (
      <div className='width-720 mg-0-auto'>
        <div className="">
          <Affix offsetTop={50}>
            <div className='text-center light bg-radient pd-top-30 me1 width-720'>
              <Icon className='mg-right-10 text-left' style={{fontSize:'20px', color:'white'}} type="home" theme="filled" />
              <Icon className='mg-right-10' style={{fontSize:'20px', color:'white'}} type="redo" />
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