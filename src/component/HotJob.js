import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const chunk = (array, chunkSize) => {
  return array.reduce((previous, current) => {
    let chunk;
    if (previous.length === 0 || previous[previous.length -1].length === chunkSize) {
      chunk = [];
      previous.push(chunk);
    } else {
      chunk = previous[previous.length -1];
    }
    chunk.push(current);
    return previous;
  }, []);
};

class HotJob extends Component {
  state = {
    items: [
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/001.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/002.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
      'https://www.serebii.net/sunmoon/pokemon/003.png',
    ],
  }

  generateList = (list) => {
    return (
      <div className="list">
        {
          ((items, fallback) => {
            let componentList = items.map(item => <img src={item} />);
            for (let i = 0; i < this.props.column - items.length; i++) {
              componentList.push(<img src={fallback} />);
            }
            return componentList;
          })(list, 'https://www.serebii.net/sunmoon/pokemon/493.png')
        }
      </div>);
  }

  generateDefault = (list) => {
    const template = [];
    for (let i = 0; i < this.props.row; i++) {
      if ((this.props.column * (i + 1)) - list.length >= this.props.column) {
        template.push(this.generateList([]));
      }
    }
    return template;
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      lazyLoad: true,
    };

    return (
      <div className="container">
        <h2>Hot Job</h2>
        <Slider {...settings}>
          {
            chunk(this.state.items, this.props.column * this.props.row).map((list) => (
              <div>
                {
                  chunk(list, this.props.column).map((items) => (
                    this.generateList(items)
                  ))
                }
                {
                  this.generateDefault(list)
                }
              </div>)
            )
          }
        </Slider>
      </div>
    );
  }
}

export default HotJob;
