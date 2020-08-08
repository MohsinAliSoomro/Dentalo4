import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import Footer from '../Layout/Footer'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (
      <div>
        <div style={{ width: '80%', margin: 'auto', marginTop: '100px' }}>
          <Slider {...settings}>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="photo" />

            </div>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1429043794791-eb8f26f44081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=990&q=80" alt="photo" />
            </div>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1429031304811-30fb54573867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt="photo" />
            </div>
          </Slider>

        </div>
        <div style={{ width: '80%', margin: 'auto' }}>
          <Slider {...settings1}>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="photo" />

            </div>
            <div >
              <img width="100%" src="https://images.unsplash.com/photo-1429043794791-eb8f26f44081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=990&q=80" alt="photo" />
            </div>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1429031304811-30fb54573867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt="photo" />
            </div>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="photo" />

            </div>
            <div >
              <img width="100%" src="https://images.unsplash.com/photo-1429043794791-eb8f26f44081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=990&q=80" alt="photo" />
            </div>
            <div>
              <img width="100%" src="https://images.unsplash.com/photo-1429031304811-30fb54573867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt="photo" />
            </div>
          </Slider>
        </div>
        <div style={{ marginTop: '50px' }}>
          <ReactPlayer url={`../../static/videos/boxes/2.mp4`} playing={true} loop={true} volume={1} />
        </div> 
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
