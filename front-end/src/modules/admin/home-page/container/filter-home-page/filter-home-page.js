import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const children = [];

for (let i = 2019; i >= 2000; i--) {
  children.push(<Option key={i}>{i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}
class FilterHomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  
  render() {
    const { size } = this.state;

    return (
      <div className="">
        <div className="form-group inline pd-right-20">
          <Select size={size} defaultValue="Xếp hạng" onChange={handleChange} style={{ width: 200 }}>
            <Option value="jack">Top All</Option>
            <Option value="jack">Top tháng</Option>
            <Option value="jack">Mới nhất</Option>
            <Option value="jack">Truyện Full</Option>
            <Option value="jack">Mới cập nhật</Option>
            <Option value="jack">Truyện mới</Option>
            <Option value="lucy">Đọc nhiều nhất</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select size={size} defaultValue="Thể loại" onChange={handleChange} style={{ width: 200 }}>
            <Option value="jack">Trinh thám</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select size={size} defaultValue="Quốc gia" onChange={handleChange} style={{ width: 200 }}>
            <Option value="jack">Nhật bản</Option>
            <Option value="jack">Hàn quốc</Option>
            <Option value="jack">Việt nam</Option>
            <Option value="jack">Mỹ</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select size={size} defaultValue="Năm" onChange={handleChange} style={{ width: 80 }}>
            {children}
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select size={size} defaultValue="xắp sếp" onChange={handleChange} style={{ width: 120 }}>
            <Option value="jack">a-z</Option>
            <Option value="lucy">z-a</Option>
          </Select>
        </div>
        
         
      </div>
    )
  }
}

export default FilterHomePage;