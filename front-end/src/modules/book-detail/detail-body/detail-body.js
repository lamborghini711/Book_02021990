import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const listImg = [];
let total = 20;
for (let i = 0; i<= total; i++) {
  listImg.push(
    <div key={i}>
      <img className='width-720' src="http://trangshop.net/5898/0-fix/1.jpg?hehe=moimoi" alt="a"/>
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
        <div className="pd-bottom-20 ">
          <Affix offsetTop={50}>
            <div className='text-center light bg-radient pd-top-30 me1 width-720'>
              <Icon className='mg-right-10 text-left' style={{fontSize:'20px'}} type="home" theme="filled" />
              <Icon className='mg-right-10' style={{fontSize:'20px'}} type="redo" />
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