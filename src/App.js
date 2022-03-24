import React, { Component, Fragment } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import './App.css';
import './anime.css';

import Slider from 'react-slide-out';
import 'react-slide-out/lib/index.css';

export class App extends Component {
  state = {
    landingPageData: {},
    loading: true,
    loading2: true,
    change: false,
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
    setTimeout(() => {
      this.setState({ loading2: false });
    }, 2450);
  }

  setChange = () => {
    this.setState({ change: !this.state.change });
  };

  render() {
    console.log(this.state.change);
    return (
      // <div className="loadingScreen">
      //   <div class="animated-title">
      //     <div class="text-top">
      //       <div>
      //         <span>DISCOUNT</span>
      //         <span>APPLIANCES REPAIR</span>
      //       </div>
      //     </div>
      //     <div class="text-bottom">
      //       <div>Always at Your Service Since 1995</div>
      //     </div>
      //   </div>
      // </div>
      <Fragment>
        <Slider foldMode isFolded foldWidth="100%" isOpen={this.state.loading}>
          {/* <div className={this.state.loading2 ? 'body' : 'swing-out-left-fwd body'}> */}
          <div className="body">
            <div>
              <div className="div">WELCOME TO </div>
              <div className="div">
                <span>DISCOUNT APPLIANCES REPAIR</span>
              </div>

              <p className="p">
                Always at Your Service Since
                <span className="date" style={{ fontFamily: 'monospace', fontSize: 30 }}>
                  1995
                </span>
              </p>
            </div>
            {/* <div>
          <img
            src={"img/logo.jpg"}
            alt="..."
            className="imglogo bounce-in-bottom"
            // style={{ height: 100, width: 300 }}
          />
        </div> */}
          </div>
        </Slider>

        {this.state.loading2 ? (
          <Fragment>
            {/* <div className={this.state.loading2 ? 'body' : 'swing-out-left-fwd body'}>
              <div>
                <div className="div">WELCOME TO </div>
                <div className="div">
                  <span>DISCOUNT APPLIANCES REPAIR</span>
                </div>

                <p className="p">
                  Always at Your Service Since
                  <span className="date" style={{ fontFamily: 'monospace', fontSize: 30 }}>
                    1995
                  </span>
                </p>
              </div> */}
            {/* <div>
                <img
                  src={"img/logo.jpg"}
                  alt="..."
                  className="imglogo bounce-in-bottom"
                  // style={{ height: 100, width: 300 }}
                />
              </div> */}
            {/* </div> */}
          </Fragment>
        ) : (
          <div>
            <Navigation change={this.state.loading ? this.state.loading : this.state.change} />
            <Header data={this.state.landingPageData.Header} />
            <Features data={this.state.landingPageData.Features} className="aa" />
            <About data={this.state.landingPageData.About} />
            <Services data={this.state.landingPageData.Services} setChange={this.setChange} />
            <Gallery />
            <Testimonials data={this.state.landingPageData.Testimonials} />
            <Team data={this.state.landingPageData.Team} />
            <Contact data={this.state.landingPageData.Contact} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
