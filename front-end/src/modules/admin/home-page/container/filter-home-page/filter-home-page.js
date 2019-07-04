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
      <div>
        <div className="form-group inline pd-right-10">
          <label className="block opa-5" for="sort">Thể loại</label>
          <Select size={size} defaultValue="2019" onChange={handleChange} style={{ width: 200 }}>
            {children}
          </Select>
        </div>
        <div className="form-group inline pd-right-10">
          <label className="block opa-5" for="sort">Quốc gia</label>
          <Select size={size} defaultValue="2019" onChange={handleChange} style={{ width: 200 }}>
            {children}
          </Select>
        </div>
        <div className="form-group inline pd-right-10">
          <label className="block opa-5" for="sort">Năm</label>
          <Select size={size} defaultValue="2019" onChange={handleChange} style={{ width: 200 }}>
            {children}
          </Select>
        </div>
        <div className="form-group inline pd-right-10">
          <label className="block opa-5" for="sort">Xắp sếp</label>
          <Select size={size} defaultValue="2019" onChange={handleChange} style={{ width: 200 }}>
            {children}
          </Select>
        </div>
        
         
      </div>
    )
  }
}

export default FilterHomePage;