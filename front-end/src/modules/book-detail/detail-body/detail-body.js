import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const listImg = [];

let body = [
  'https://lh3.googleusercontent.com/oUMpYlgBh3tKB7lAb59Ns_B6QD5Q7VheUvAfgULXE-wAqG6qDG9_bBqSgiyV7TbFwvhzzmjoSGGuLO6xB9qSt7vUab1PCryyZCG2fFZFR8_UHxbyJT-h5T087lS5ul2mMCWS2n6tBdTfofwzqSLXh-ofR4ZDMW_k_Rn1aWWL_quwMJYZsIUwcItEtbBpCu1hbAPwUBR48fGuZg6Lij76ouTv-tmlXuEuZXb2dOgH1yzbjjbLoZb-xy6xBJtZ_eOTIgb_yz_l0j85z5sVRovXyCKNT6ESe5YfUzwh6-mmBNOltjpijDgG5scEkf09rVGeuQh37Jzd4YQXo66S2xZHa5Ahc-AD7bL8pIrepqs8Vrpv5OyTo28qpvZnX0ULgAFA9Gfd6RIO0EuRLt3lZHAuUAx0xCuk4cbi8Trcqu5mJPp6hnb38tTuv_GWNJmFMVUDuOXcvLwHDI3QOkxjv_prCHNET-lrvB-mqD24cMyNUm_cc9QoCFV4X10I5IVV3Pwz0z0CkemWyS14sA6uV9TYdttwAqQl9E19ZC7mX_fwQylRXDav6yMYiP5Pg6p1HZ7hy8TymUYTQSyNie7ISJOwJcCSxAaNt_HTr9R6IFAFW-gHT06B9KlxlqZ6I8Up-z_W1dd0LbIWoYDJTeleAPBm0d4BmzO8BK0Aefo-NknjyxcHd7EN1CsGZR4_XOJhRXm6YrOcsaw7PrAv_fNyqf1UEC-_=w800-h1275-no',
  'https://lh3.googleusercontent.com/49HDbszix1MP39FhTfqO2-WUYxLmpV24yE-eg7ppIfRK4VcFAa3w51vWffk0A-NS02iTSrcGjtz_sLn5xxR8PPka_3tU_C2WbGuroiK-OTuCtPEa8UYJFWrwUxSI7KC9e3Ry31xOOrH_2Nvl_imyIlVsphbdaYzR-q21ycFyxTvDZNvHYgH3dwpQLXR3X84XyI6x4XKVmK4y2qQxEpsKjWvhegj-lVOdc4W0_XR9wJDNYPI3TkXdUBWVYJxCjAwrovnnGLk7g6kappLH7yuOfCBTwahp54zDO1OGufXvRe8ftQImxv95cPGcNEPnL-vXqxBvGmsOLQtIABJvvjVWz3DMfQFMWok5Wy1ysa1avl_dE-56Ho44w_tGpiVTBb7ZU98WzpQW8Be5PIB6uddBJzbauY8440U4LMRAxrSmL7SiyFRVWaG6QEcj_qlZNdknvB0NU32Hdh3Z6wL4QvFLYRnQrN6ToWnWyR8rM9894HhGfaaJiN4rBl5SxTJS7OEflfgkC08OcwWI8W47_w1kTAF0_Xaj_qLJr1erlcsZptSPxBY8P9ThhHGMkduUshwuDe9r_E_EdtGXprd296Qn5o00MrcXNUqRufFrt9MwV5sjuAXOLKvK_3qNovTANcsmtBkyBJh3K6rgshVadw7kaBbaU-z_85TDpzFSGJvGVPVax1jPfEOxFmhYSG0bjllLF3Ai4Wqm3TxMIx_9zmwSaSP7=w800-h828-no', 
  'https://lh3.googleusercontent.com/XQMK6Y2nKNHWk6J6gidZt7_WWrPQQUfIA5IwCuouuIIqcKdmilaO5sdJCdlSu4kWt9pfjoIKeqhChezvlAs5ycSd5U4qsjr3hZQpWRbZAD8BHPBdpd6j2u_LaaFvulJSlLpZ3ji30r2GijsdmK1xYc2RDOMP5KK3XAtqUbFl4CRi80UVIQsS--2gqi-QQewwR8DApcYN_8jzsjQogUFgdp7KyImrQUOktRzLhwIix9KlbGCy00_OcXNLUNU0pE08AdXsGjZLuwkDkD0qRUfKisuS_i7emM3rjYxBeno_3ssbJcdpwhKb202SygM3qD55iPqQftl-5XSpwsdAahDFZkhnSQALb4geSpksHLb3qGHaW1pVsyiQKtcpMP-02nm1RCxREuKGmaO19UBBaf-njobjyKm25H88OKr4yyLsRhs5omGxNG0ruV-kuKsn21FcGUzg8mkwYC2StqPLlFaVktqob-M_2zJ98KiO3xLJKbQ8Q5nFcEknoj02L7jQuKgDyvMVaVEpe1n3mq0ssgpQrBeahIfF8pWT9MDYMYaqxXP7YGCRvtjoDIFXkob6KmG9KYBwTai2SeLMiuoeTBtp4LF4Ijxf0c806_3Yw1-6f8dGZP3vscyt_TKe5b1AyOAikGzyoEmwn5q2QOLmIKY6cR3MOyIM5CTirHIxGwjSKqy8QGbqIDAovqGMJhaZdn7CyIKZWHy4M8tJlhPdqLjwXDtc=w800-h804-no',
  'https://lh3.googleusercontent.com/3W46GBCa6XWXEGLjBbjuJaHaaPaAQZ4T7xRgw7VLHkQkTsGKOZQgVjarz-OK1RZbYK4RtXr7pBYjiTtINqqqFHXl97Xnf3p83tfCUiKrmQNOIlmNYDV1aLlFhNBDOn_eUMpDyws4GZxkqdsn09v1M1whvQCqFzrEM7nPzb1CTB1frGP0fHWX-Lh9tRoGtgS4LxCE2Gl29Lyx0tTVhARQwYUw10EvxfX5Czx8EoM8jVJiD5Y5HGkf0tuf-VukG1pzwiNoeeIflXfNnBktdoXzDwrpECgyHURWVsOCJuy3ULHMMD_24ldM35iiv8wKwu_wdg-kCNpIMwS81Rby2a253mqD34oyjUMVW1VReeujdrPuLNKbk0bnIQmhTIRK7ODOwval2crnZJWJ2hHz6RMPlBA0SJUDkKYdAaq8e22aJzbUy_rJAqdXZ3ffA3OD3yg0_V_HBOmd5LhtRrFwFyDovpDibpUNCFPKt7_XVlENrnHETAN8-4lY84RLT1fTCdzFPHQOXuSF9mJ4S54bYC6KFMsOgt2Mbj73GfTEKZv7SrDGT7ZY13LDSIABqq78FJghemNqUy-ggY4DQrEwKEb1b4TrX-vg_mnY8_ZbwU2_Skce8GVRlGmQ0DTejZZcsKhLuF2m5il_Pw2fElfJDVEvq-Q7-cNU7k2QxYE6vURjcXKzkqn7PzTs6erzlrCWDFAnzcAhRckL9y6JmB5fYvyLabTW=w800-h833-no',
  'https://lh3.googleusercontent.com/i_t5YkfHyX7YeT-eG-hNOUUGu7KVPaVDFNz-lFOiql36YP4EXQHniGu17etODSqdCW0VSIKjkaFRQZwbLU--SQkXxNtWzPpXAaN75Enm1aDh2u6PXIPRdFPujV7G6Q1JaXfuLvXOQIM8M4LAT4GQ3t7ttL5S_BCnC9mHHBzS2Cvo1ntxRwN2PPEYaSEy13yD0pk8w-IqSzYbmtS67VAdwlQXOnZVm9QCCRhe4-V7d9e_W9uT9oVc8a2T2S0fxK2NN2_AjrBJb-Mwk6T13_rHMC4B0CcHz38aKpQWiBob25XLm0xn4gbdO_SXBm_IDISyvyWZozm-xMu4SRcG14zLy5NpAJlMeHNG3legG5TlJzEF26lg3rp_Hdqbar-nu8nEuUmOZAO5rDXp-wwRwK4WyUPokmw9BnYsusvPNzgySB-WH81tKnWcR-ol7og5b_fblmuFeDwQuNGBavbPfyFCAvjNgeLDDofy_4YvlhZ9lkzCNPu9aeyAa8AFyymCWYKbUe8apCpCxtnFv8ht7JYQt_IraNsM3e-4IcB93jSuaboO2KxWDAXP6DqS1gMqe7kNRgvWFEw3H-wz2hKisWGc942I3bIo7fpuDNJYAJz-u0jmHDLveS4GdEH0XCxo2wghumb2vifwKu1rVIyPN0j8xnHUh9dLiPLDb3qC4aEYXNpNTKQYdeJc_VzYtlwyB7-4coorPURugYaw1gKFhUWjZ03k=w800-h702-no'

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
      <div className='width-720 mg-0-auto pd-top-30'>
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