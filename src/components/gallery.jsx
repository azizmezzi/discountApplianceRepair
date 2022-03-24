import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      img: '',
    };
  }

  openModal(img) {
    this.setState({
      visible: true,
      img,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
      img: '',
    });
  }
  render() {
    // const { open } = this.state;
    return (
      <div id="portfolio" className="text-center">
        <Modal
          visible={this.state.visible}
          width="600"
          height="500"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <img
            style={{ height: '100%', width: '100%' }}
            src={this.state.img}
            // style={{ height: '300px', width: '100%' }}
            className=" img-responsive"
            alt="Project Title"
          />
        </Modal>
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              The Discount Appliances Repair HVAC team has more than 20 years of experience in the
              appliance service industry.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/01-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        style={{ height: '300px', width: '100%' }}
                        src="img/portfolio/01-small.png"
                        // style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/02-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/03-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/04-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/05-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/06-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/07-large.png')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.png"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/08-large.jpg')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div
                      onClick={() => this.openModal('img/portfolio/09-large.jpg')}
                      style={{ cursor: 'pointer' }}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Show</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        style={{ height: '300px', width: '100%' }}
                        className=" img-responsive"
                        alt="Project Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
