import React, { Component } from 'react';
import { Icon, Table } from 'antd';

const columns = [
  {
    title: 'Tên chương',
    dataIndex: 'chapter',
    render: text => <a href="a">{text}</a>,
  },
  {
    title: 'Ngày đăng',
    className: 'column-date',
    dataIndex: 'date',
  }
];

const data = [
  {
    key: '1',
    chapter: 'John Brown',
    date: '20/07/2019',
  },
  {
    key: '2',
    chapter: 'Jim Green',
    date: '10/07/2019',
  },
  {
    key: '3',
    chapter: 'Joe Black',
    date: '20/07/2019',
  },
  {
    key: '4',
    chapter: 'John Brown',
    date: '20/07/2019',
  },
  {
    key: '5',
    chapter: 'Jim Green',
    date: '10/07/2019',
  },
  {
    key: '6',
    chapter: 'Joe Black',
    date: '20/07/2019',
  },
  {
    key: '7',
    chapter: 'John Brown',
    date: '20/07/2019',
  },
  {
    key: '8',
    chapter: 'Jim Green',
    date: '10/07/2019',
  },
  {
    key: '9',
    chapter: 'Joe Black',
    date: '20/07/2019',
  },
  {
    key: '10',
    chapter: 'John Brown',
    date: '20/07/2019',
  },
  {
    key: '12',
    chapter: 'Jim Green',
    date: '10/07/2019',
  },
  {
    key: '13',
    chapter: 'Joe Black',
    date: '20/07/2019',
  },
];

class BookInfoFooter extends Component {
  render() {
    return (
      <div className="row">
        <h3 className="text-600 pd-bottom-10">
          <Icon type="security-scan" style={{paddingRight:'10px'}} />Danh sách: <span>32 chương</span>
        </h3>
        <div style={{backgroundColor:"#fff"}}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 350 }}
          />
        </div>
      </div>
    );
  }
}

export default BookInfoFooter;