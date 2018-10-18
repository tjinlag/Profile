import React, { Component } from 'react';

const style = {
  iconContainer: {
    width: 80,
  },
  icon: {
    width: 40,
    height: 40,
  },
}

class SliderMain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 p-0">
          <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators text-warning">
              <li data-target="#carouselId" data-slide-to="0" className="active">
              </li>
              <li data-target="#carouselId" data-slide-to="1"></li>
              <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src="https://goo.gl/MsRyZR" alt="First slide"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img src="https://goo.gl/U543Bj" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Title</h3>
                  <p>Description</p>
                </div>
              </div>
              <div className="carousel-item">
                <img rc="https://goo.gl/EtMmi8" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Title</h3>
                  <p>Description</p>
                </div>
              </div>
            </div>
            {/* Previous Icon */}
            <a
              className="carousel-control-prev"
              href="#carouselId"
              role="button"
              data-slide="prev"
              style={style.iconContainer}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={style.icon}
              />
              <span className="sr-only">Previous</span>
            </a>
            {/* Next Icon */}
            <a
              className="carousel-control-next"
              href="#carouselId"
              role="button"
              data-slide="next"
              style={style.iconContainer}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={style.icon}
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderMain;