import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link text-uppercase text-light small" href="#/">
          {this.props.content}
        </a>
      </li>
    );
  }
}

class MenuBar extends Component {
  render() {
    return (
      <div className="row">
        <ul className="nav bg-dark col-md-12 px-5">
          <li className="nav-item">
            <a
              className="nav-link text-uppercase text-warning small border-bottom border-warning"
              href="#/"
            >
              Trang chủ
            </a>
          </li>
          <NavItem content="BXH" />
          <NavItem content="Top 100" />
          <NavItem content="Chủ đề" />
          <NavItem content="Video" />
          <NavItem content="Album" />
          <NavItem content="Nghệ Sĩ" />
        </ul>
      </div>
    );
  }
}

export default MenuBar;