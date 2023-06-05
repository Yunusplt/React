import React from 'react'
import OgrenciItem from './OgrenciItem';

const OgrenciList = () => {
  return (
    <div>
      <img
        src="https://gelecekegitimde.com/wp-content/uploads/2015/01/fft99_mf3019637.jpeg"
        alt=""
      />
      <h3 style={{ backgroundColor: "lightgray", textAlign: "center" }}>
        OGRENCI LISTESI
      </h3>
      <OgrenciItem/>
    </div>
  );
}

export default OgrenciList