import React, { Component } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export class Header extends Component {
  render() {
    const text = 'Discount Appliances Repair HVAC';
    const text2 = text.split(' ');
    var tab = [];
    for (let s = 0; s < text2.length; s++) {
      if (tab.length === 0) tab.push(text2[s].length);
      else tab.push(tab[s - 1] + text2[s].length);
    }
    return (
      <header id="page-top">
        <Swiper
          // spaceBetween={50}
          // slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div
              className="intro"
              style={{
                background: 'url(../img/intro-bg.jpg) center center no-repeat',
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-9 col-md-offset-2 intro-text">
                      {this.props.data
                        ? text2.map((mots, j) => {
                            const text3 = mots.split('');

                            return (
                              <span>
                                {text3.map((lettre, i) => (
                                  <h1
                                    className="char"
                                    style={{
                                      color: 'white',
                                      animationDelay: 30 * (tab[j] * j + i) + 'ms',
                                    }}
                                  >
                                    {lettre}
                                  </h1>
                                ))}
                                {j === 0 && <br />} &nbsp;&nbsp;&nbsp;&nbsp;
                                {'    '}
                              </span>
                            );
                          })
                        : 'Loading'}

                      <span></span>

                      <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                      <a href="#features" className="btn btn-custom btn-lg page-scroll">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="intro"
              style={{
                background: 'url(../img/im2.jpg) center center no-repeat ',
                backgroundSize: 'cover',
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-9 col-md-offset-2 intro-text">
                      {this.props.data ? <h1>discount 10 % same Day service</h1> : 'Loading'}

                      <span></span>

                      <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                      <a href="#features" className="btn btn-custom btn-lg page-scroll">
                        Learn More
                      </a>
                      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="intro"
              style={{
                background: 'url(../img/im3.jpg) center center no-repeat ',
                backgroundSize: 'cover',
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-9 col-md-offset-2 intro-text">
                      {this.props.data ? <h1>free service call with repairs</h1> : 'Loading'}

                      <span></span>

                      <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                      <a href="#features" className="btn btn-custom btn-lg page-scroll">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    );
  }
}

export default Header;
