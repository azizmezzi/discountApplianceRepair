import React, { Component, Fragment } from 'react';

export class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.data,
      hover: -1,
    };
  }
  render() {
    return (
      <Fragment>
        <div style={{ height: 600 }}>
          <div id="team">
            <div className="container text-center">
              <div className="col-md-8 col-md-offset-2 section-title">
                <h2>Makes & Models </h2>
                <p>We Serve on all these Most Major Makes & Models</p>
              </div>
            </div>
            <div
              className="text-center"
              id="row"
              style={{
                flexDirection: 'row',
                marginBottom: 30,
                marginLeft: 100,
                marginRight: 100,
              }}
            >
              {this.props.data
                ? this.props.data.img.map((d, i) => (
                    <img
                      onMouseOver={() => this.setState({ hover: i })}
                      onMouseOut={() => this.setState({ hover: -1 })}
                      src={d.img}
                      key={`${d.name}-${i}`}
                      alt="..."
                      className={this.state.hover === i ? '' : 'img'}
                      style={{ height: 40, width: 80, margin: 15 }}
                    />
                  ))
                : 'loading'}
            </div>
            <div className="list-style">
              <div className="col-lg-1 col-sm-1 "></div>
              <div className="col-lg-3 col-sm-3 ">
                <ul style={{}} className="ul">
                  {this.props.data
                    ? this.props.data.types.map((d, i) => (
                        <li
                          style={{ justifyContent: 'flex-start' }}
                          className="li"
                          key={`${d}-${i}`}
                        >
                          {d}
                        </li>
                      ))
                    : 'loading'}
                </ul>
              </div>

              <div className="col-lg-4 col-sm-4 ">
                <ul className="ul">
                  {this.props.data
                    ? this.props.data.types2.map((d, i) => (
                        <li className="li" key={`${d}-${i}`}>
                          {' '}
                          {d}
                        </li>
                      ))
                    : 'loading'}
                </ul>
              </div>

              <div className="col-lg-4 col-sm-4 ">
                <ul className="ul">
                  {this.props.data
                    ? this.props.data.types3.map((d, i) => (
                        <li className="li" key={`${d}-${i}`}>
                          {' '}
                          {d}
                        </li>
                      ))
                    : 'loading'}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Team;
