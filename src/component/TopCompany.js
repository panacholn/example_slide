import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

class TopCompany extends Component {
  state = {
    items: [
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
      'https://www.serebii.net/sunmoon/pokemon/004.png',
      'https://www.serebii.net/sunmoon/pokemon/005.png',
      'https://www.serebii.net/sunmoon/pokemon/006.png',
      'https://www.serebii.net/sunmoon/pokemon/007.png',
      'https://www.serebii.net/sunmoon/pokemon/008.png',
      'https://www.serebii.net/sunmoon/pokemon/009.png',
    ],
  }

  render() {
    const settings = {
      focusOnSelect: false,
      draggable: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 500,
      lazyLoad: true,
    };

    return (
      <div className="container">
        <h2>Top Company</h2>
        <Slider {...settings}>
          {
            this.state.items.map((item) => (
              <div key={item}>
                <img src={item} />
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default TopCompany;
