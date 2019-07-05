import React, { Component } from 'react';
import { Card, Badge } from 'antd';
const { Meta } = Card;

class ListBook extends Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-2 col-card">
          <Badge count={'99'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="/img/thumb/poster_02.jpg" />}
            >
              <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
            </Card>
          </Badge>
        </div>
        <div className="col-md-2 col-card">
          <Badge count={'12'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="/img/thumb/poster_01.jpg" />}
            >
              <Meta title="Dự án Chim Ruồi" description="The Hummingbird Project" />
            </Card>
          </Badge>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
          >
            <Meta title="Sau thế chiến" description="The Aftermath" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
          >
            <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22141/poster_01_tim37584.jpg" />}
          >
            <Meta title="Dumbo: Chú voi biết bay" description="Dumbo" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Badge count={'99'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/cx7CuTtcJvjZAP6ZFWoxylCXKFP.jpg" />}
            >
              <Meta title="Tay Đua Huyền Thoại" description="Trading Paint" />
            </Card>
          </Badge>
        </div>
        <div className="col-md-2 col-card">
          <Badge count={'99'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg" />}
            >
              <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
            </Card>
          </Badge>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover" alt="example" src="https://img.khoai.tv/images/movies/21622/poster_01_kfq72011.jpg" />}
          >
            <Meta title="Điều Ước Của Quỷ" description="Wishmaster" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22252/poster_01_snd34932.jpg" />}
          >
            <Meta title="Đứa Con Của Bóng Tối" description="Brightburn" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Badge count={'99'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22114/poster_01_ops64726.jpg" />}
            >
              <Meta title="Kẻ thù số một" description="The Best of Enemies" />
            </Card>
          </Badge>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/19081/poster_01_ler56116.jpg" />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
          >
            <Meta title="Sau thế chiến" description="The Aftermath" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
          >
            <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22141/poster_01_tim37584.jpg" />}
          >
            <Meta title="Dumbo: Chú voi biết bay" description="Dumbo" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/cx7CuTtcJvjZAP6ZFWoxylCXKFP.jpg" />}
          >
            <Meta title="Tay Đua Huyền Thoại" description="Trading Paint" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg" />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
          >
            <Meta title="Sau thế chiến" description="The Aftermath" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
          >
            <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22141/poster_01_tim37584.jpg" />}
          >
            <Meta title="Dumbo: Chú voi biết bay" description="Dumbo" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/cx7CuTtcJvjZAP6ZFWoxylCXKFP.jpg" />}
          >
            <Meta title="Tay Đua Huyền Thoại" description="Trading Paint" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg" />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22166/poster_01_fkh37521.jpg" />}
          >
            <Meta title="Từ Khi Có Anh" description="After" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover" alt="example" src="https://img.khoai.tv/images/movies/21622/poster_01_kfq72011.jpg" />}
          >
            <Meta title="Điều Ước Của Quỷ" description="Wishmaster" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21666/poster_01_fug27005.jpg" />}
          >
            <Meta title="American Exit" description="American Exit" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22252/poster_01_snd34932.jpg" />}
          >
            <Meta title="Đứa Con Của Bóng Tối" description="Brightburn" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/19081/poster_01_ler56116.jpg" />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22114/poster_01_ops64726.jpg" />}
          >
            <Meta title="Kẻ thù số một" description="The Best of Enemies" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
          >
            <Meta title="Sau thế chiến" description="The Aftermath" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
          >
            <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22141/poster_01_tim37584.jpg" />}
          >
            <Meta title="Dumbo: Chú voi biết bay" description="Dumbo" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
          >
            <Meta title="Bông hồng chết người" description="The Poison Rose" />
          </Card>
        </div>
        <div className="col-md-2 col-card">
          <Card
            cover={<img className="border-radius-10 thumb-cover" alt="example" src="https://img.khoai.tv/images/movies/21622/poster_01_kfq72011.jpg" />}
          >
            <Meta title="Điều Ước Của Quỷ" description="Wishmaster" />
          </Card>
        </div>
      </div>
    );
  }
}

export default ListBook;