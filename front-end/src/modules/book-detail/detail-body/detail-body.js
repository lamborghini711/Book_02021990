import React, { Component } from 'react';
import SelectChapter from './select-chapter';

const listImg = [];
let body = [
 'https://www.dropbox.com/s/7sor82riqcf1xaz/001.jpg?raw=1',
 "https://www.dropbox.com/s/zlyu41e1142rd6l/002.jpg?raw=1",
 'https://www.dropbox.com/s/tpv4ng3wyfku7qh/003.jpg?raw=1',
 "https://www.dropbox.com/s/slxfr13hzi1ed3n/004.jpg?raw=1",
 "https://www.dropbox.com/s/o4p6til28ja5rc4/005.jpg?raw=1",
 "https://www.dropbox.com/s/bume8fddecw9j3j/006.jpg?raw=1",
 "https://www.dropbox.com/s/lz4pr3dut4vi4vo/007.jpg?raw=1",
 "https://www.dropbox.com/s/rihr9l6dvxc1dmi/008.jpg?raw=1",
 "https://www.dropbox.com/s/uxe6y3750sqievq/009.jpg?raw=1",
 "https://www.dropbox.com/s/n1wrqq9qmn6toc3/010.jpg?raw=1",
 "https://www.dropbox.com/s/qsj19psm3snnkb6/011.jpg?raw=1",
 "https://www.dropbox.com/s/g9a3fdurp4kcap3/012.jpg?raw=1",
 "https://www.dropbox.com/s/nuxwnezee4ciwj7/013.jpg?raw=1",
 "https://www.dropbox.com/s/6u1ksvv9te1lyza/014.jpg?raw=1",
 "https://www.dropbox.com/s/pfjhgzz163tuayp/015.jpg?raw=1",
 "https://www.dropbox.com/s/ecgnenkeg9y7dlc/016.jpg?raw=1",
 "https://www.dropbox.com/s/9khz3r5zswel6ai/017.jpg?raw=1",
 "https://www.dropbox.com/s/64b1b3hi5qo7qmh/018.jpg?raw=1",
 "https://www.dropbox.com/s/wdidko0h99wvb9d/019.jpg?raw=1",
 "https://www.dropbox.com/s/1p1bcj5cz3cwrsr/020.jpg?raw=1",
 "https://www.dropbox.com/s/q6odrf6q35rgala/021.jpg?raw=1",
 "https://www.dropbox.com/s/ln1owedi7h42i3r/022.jpg?raw=1",
 "https://www.dropbox.com/s/pp154u9b4z2qhgk/023.jpg?raw=1",
]
for (let i = 0; i< body.length; i++) {
  let item = body[i];
  // console.log(item)
  listImg.push(
    <div key={i}>
      <img className='width-720' src={item} alt="a"/>
    </div>
  )
}

class DetailBody extends Component {
  render() {
    return (
      <div className='width-720 mg-0-auto '>
        <div style={{marginTop:'20px'}}>
          <SelectChapter/>
        </div>
        {listImg}
      </div>
    );
  }
}

export default DetailBody;