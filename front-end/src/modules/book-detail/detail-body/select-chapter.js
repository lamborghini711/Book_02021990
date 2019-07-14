import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';




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