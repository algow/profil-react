import React, { Component } from 'react';
import Slider from "react-slick";
import Total from './total';
import JenisBelanja from './jenisbelanja';
import Kabupaten from './perkabupaten';
import Kppn from './perkppn';

class Charts extends Component {
  render() {
    return(
      <div>
        <Slider 
          showArrows={true}
          dots={true}
          autoplay={true}
          infinite={true}
          autoplaySpeed={6000}
        >
          <Total />
          <Kabupaten />
          <JenisBelanja />
          <Kppn />
        </Slider>
      </div>
    )
  }
}

export default Charts;