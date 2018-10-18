import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className="row bg-dark text-white border-bottom border-secondary">
        {/* Music Today */}
        <div className="col-md-2 d-flex align-items-center">
          <h6 className="m-auto text-white">Music Today</h6>
        </div>
        
        {/* Search */}
        <div className="col-md-7 m-0 p-0">
          <div className="input-group input-group-sm m-auto p-2">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark border-right-0">
                <i className="fas fa-search" style={{color: "whitesmoke"}} />
              </span>
            </div>
            <input
              type="text"
              className="form-control bg-dark border-left-0"
              placeholder="Nhập tên bài hát, ca sĩ hoặc video …"
            />
          </div>
        </div>

        {/* Sign In */}
        <div className="col-md-3 align-middle d-flex align-items-center">
          <i className="fas fa-user-circle fa-2x"></i>
          <span className="btn">Đăng nhập</span>
        </div>
      </div>
    );
  }
}

export default TopBar;