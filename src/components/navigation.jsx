import React, { Component } from "react";

export class Navigation extends Component {
  state = {
    color: true,
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      this.setState({ color: false });
    } else {
      this.setState({ color: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    console.log(this.state.color);

    return (
      <nav
        id="menu"
        className="navbar navbar-default navbar-fixed-top slide-in-right"
        style={{
          backgroundColor: this.state.color ? "transparent" : "",
          zIndex: this.props.change ? -9999 : 9999,
        }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div id="container">
              {/* <a href="tel:+21654587278" style={{ textDecoration: "none" }}> */}
              <div
                id="flip"
                style={{ cursor: "pointer" }}
                onclick="window.location='tel:+21654587278';"
              >
                <div>
                  <div
                    className="page-scroll"
                    style={{ color: this.state.color ? "white" : "black" }}
                  >
                    <a
                      style={{
                        textDecoration: "inherit",
                        color: "inherit",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                      }}
                      href="tel:+21654587278"
                    >
                      703-593-8500
                    </a>
                  </div>
                </div>
                <div>
                  <div
                    className="page-scroll"
                    style={{ color: this.state.color ? "white" : "black" }}
                  >
                    <a
                      style={{
                        textDecoration: "inherit",
                        color: "inherit",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                      }}
                      href="tel:+21654587278"
                    >
                      Call us
                    </a>
                  </div>
                </div>
                <div>
                  <div
                    className="page-scroll"
                    style={{ color: this.state.color ? "white" : "black" }}
                  >
                    <a
                      style={{
                        textDecoration: "inherit",
                        color: "inherit",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                      }}
                      href="tel:+21654587278"
                    >
                      DAR
                    </a>
                  </div>
                </div>
              </div>
              {/* </a> */}
            </div>
            {/* <a
              className="navbar-brand page-scroll"
              href="#page-top"
              style={{ color: this.state.color ? "white" : "" }}
            >
              DAR
            </a> */}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#features"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Makes & Models
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="page-scroll"
                  style={{ color: this.state.color ? "white" : "" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
