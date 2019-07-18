import React from 'react';
import { Alert } from 'antd';

const AlertBox = (props) => (
  <Alert className="alert-new" message={props.message} type={props.type} showIcon />
);
// class AlertBox extends Component {
//   render() {
//     notification.open({
//       message: 'Tạo thành công',
//       description:
//         `Chúc mừng bạn đã tạo truyện '${this.props.response.createBook.data.name}' thành công`,
//       onClick: () => {
//         console.log('Notification Clicked!');
//       },
//     });
//     return (
//       <div>
         
//       </div>
//     );
//   }
// }

export default AlertBox;