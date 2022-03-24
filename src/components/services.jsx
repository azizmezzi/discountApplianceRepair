import React, { Component } from 'react';
import { ReactComponent as WashingMachine } from '../icons/svg/washing-machine.svg';
import { ReactComponent as Fridge } from '../icons/svg/refrigerator.svg';
import { ReactComponent as Oven } from '../icons/svg/oven.svg';
import { ReactComponent as Dishwasher } from '../icons/svg/dishwasher.svg';
import { ReactComponent as WaterHeater } from '../icons/svg/water-heater.svg';
import { ReactComponent as Cremation } from '../icons/svg/cremation.svg';
import { ReactComponent as AirConditioning } from '../icons/svg/air-conditioning.svg';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleIcon: -1,
      isOpen: false,
      titleSlider: '',
      text: '',
      text2: '',
      image: '',
    };
  }
  svgView = (i) => {
    const { styleIcon } = this.state;
    switch (i) {
      case 0:
        return (
          <WashingMachine
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 1:
        return (
          <Dishwasher
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 2:
        return (
          <Fridge
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 3:
        return (
          <Oven
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 4:
        return (
          <WaterHeater
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 5:
        return (
          <AirConditioning
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );
      case 6:
        return (
          <Cremation
            className="img-responsive"
            style={{
              fill: styleIcon === i ? '' : 'white',
              height: 70,
              width: 70,
              marginTop: -15,
              marginLeft: 25,
            }}
          />
        );

      default:
        break;
    }
  };

  render() {
    const { titleSlider, text, text2, image } = this.state;
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              You can count on DISCOUNT APPLIANCES REPAIR to not only meet, but exceed all your
              needs and requests. Learn more about the services we provide below, and let us know if
              you’d like to learn more about a specific offering.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.data1.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-3">
                    {' '}
                    <i
                      onClick={() => {
                        this.props.setChange();
                        this.setState({
                          isOpen: true,
                          titleSlider: d.name,
                          text: d.text,
                          text2: d.text2,
                          image: d.img,
                        });
                      }}
                      onMouseOver={() => this.setState({ styleIcon: i })}
                      onMouseOut={() => this.setState({ styleIcon: -1 })}
                      className=" fa fa-languageaz zoom"
                      style={{
                        background:
                          this.state.styleIcon === i
                            ? 'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)'
                            : '',
                      }}
                    >
                      {this.svgView(i)}
                    </i>
                    <div className="service-desc">
                      <h3
                        style={{
                          cursor: 'pointer',
                          textTransform: 'lowercase',
                        }}
                      >
                        {d.name}
                      </h3>
                      {/* <p>{d.text}</p> */}
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            {this.props.data
              ? this.props.data.data2.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-3">
                    {' '}
                    <i
                      onClick={() => {
                        this.props.setChange();
                        this.setState({
                          isOpen: true,
                          titleSlider: d.name,
                          text: d.text,
                          text2: d.text2,
                          image: d.img,
                        });
                      }}
                      onMouseOver={() => this.setState({ styleIcon: i + 4 })}
                      onMouseOut={() => this.setState({ styleIcon: -1 })}
                      className=" fa fa-languageaz zoom"
                      style={{
                        background:
                          this.state.styleIcon === i + 4
                            ? 'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)'
                            : '',
                      }}
                    >
                      {this.svgView(i + 4)}
                    </i>
                    <div className="service-desc">
                      <h3
                        style={{
                          cursor: 'pointer',
                          textTransform: 'lowercase',
                        }}
                      >
                        {d.name}
                      </h3>
                      {/* <p>{d.text}</p> */}
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
        <SlidingPane
          className="sliderC"
          overlayClassName="some-custom-overlay-class"
          // title="OVEN REPAIR"
          // subtitle="Optional subtitle."
          // hideHeader
          isOpen={this.state.isOpen}
          width="70%"
          onRequestClose={() => {
            this.setState({ isOpen: false });
            this.props.setChange();
          }}
        >
          <div style={{ padding: '15px' }}>
            <h3>{titleSlider}</h3>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div style={{ width: '60%' }}>
                <p>{text}</p>
              </div>
              <div
                style={{
                  width: '40%',
                  //marginLeft: "20%",
                  marginTop: 20,
                }}
              >
                <img
                  style={{ width: '90%', height: 250 }}
                  src={image}
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <p>{text2}</p>
          </div>
        </SlidingPane>
      </div>
    );
  }
}

export default Services;
