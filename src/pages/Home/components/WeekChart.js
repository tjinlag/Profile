import React, { Component } from 'react';

const style = {
  icon: {
    width: 40,
    height: 40,
  },
}

class Title extends Component {
  render() {
    return (
      <div className="p-2">
        <a href="#/" className="text-uppercase small text-white">
          #{this.props.title}
        </a>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <li className="list-group-item p-1 bg-dark text-white">
        <img
          className="img-fluid float-left"
          src={this.props.src}
          style={style.icon}
          alt={this.props.songName}
        />
        <p className="d-inline small text-capitalize ml-1">{this.props.songName}</p>
        <h4 className="d-inline float-right">{this.props.index}</h4>
      </li>
    );
  }
}

class WeekChart extends Component {
  render() {
    return (
      <div className="row bg-dark">
        {/* Zing chart */}
        <div className="col">
          <Title title="music today chart"/>
          <ul className="list-group">
            <Item
              src="https://goo.gl/jDhuoA"
              songName="Càng níu giữ càng dễ mất"
              index={1}
            />
            <Item
              src="https://goo.gl/oHXUHs"
              songName="Tận cùng nỗi nhớ"
              index={2}
            />
            <Item
              src="https://goo.gl/2UYBv7"
              songName="Còn yêu ai đâu rời xa"
              index={3}
            />
          </ul>
        </div>
        
        {/* US UK Chart */}
        <div className="col">
          <Title title="US-UK chart"/>
          <ul className="list-group">
            <Item
              src="https://goo.gl/9iXxrE"
              songName="Girls like you"
              index={1}
            />
            <Item
              src="https://goo.gl/Urggds"
              songName="In my feelings"
              index={2}
            />
            <Item
              src="https://goo.gl/EzzHdm"
              songName="Killshot"
              index={3}
            />
          </ul>
        </div>
        
        {/* KPop Chart */}
        <div className="col">
          <Title title="Kpop chart"/>
          <ul className="list-group">
            <Item
              src="https://goo.gl/R8tkSU"
              songName="The hardest part"
              index={1}
            />
            <Item
              src="https://goo.gl/mT8ptx"
              songName="Good bye"
              index={2}
            />
            <Item
              src="https://goo.gl/cMGWsP"
              songName="Siren"
              index={3}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default WeekChart;