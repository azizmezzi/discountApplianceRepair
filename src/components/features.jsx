import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faToolbox } from "@fortawesome/free-solid-svg-icons";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <Fragment>
                    <div
                      key={`${d.title}-${i}`}
                      className="col-xs-6 col-sm-5"
                      style={{ marginLeft: "6em" }}
                    >
                      <i className={d.icon}>
                        <FontAwesomeIcon icon={i === 0 ? faTools : faToolbox} />
                      </i>

                      {/* <i className={d.icon}></i> */}
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Fragment>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
