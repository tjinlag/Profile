import React, { Component } from 'react';
import {
  Phone,
  Email,
} from '@material-ui/icons';


const style = {
  bg: {
    fontFamily: 'Hind',
    fontSize: 'small',
    color: 'white',
  },
  avatar: {
    width: "300px",
    height: "300px",
    borderRadius: '150px',
    borderStyle: 'solid',
    borderColor: 'AliceBlue',
  },
}

class Home extends Component {
  render() {
    return (
      <div style={style.bg} className="bg-dark">
        <div className="container">
          {/* avatar */}
          <div className="row justify-content-center">
            <img
              className="my-3"
              style={style.avatar}
              src={require("../../assets/images/avatar.png")}
              alt=""
            />
          </div>
          
          {/* Introduction */}
          <div className="mx-3">
            <h4 
              className="row justify-content-center text-white"
              style={{ fontFamily: 'Cinzel' }}  
            >
              Hi! I'm David
            </h4>
            <div 
              className="row justify-content-center text-white align-content-center"
              style={{ fontFamily: 'Expletus Sans', fontSize: 'small' }}  
            >
              I study Computer Science at Bach Khoa University in Ho Chi Minh City.
              <br />
              And now, I'm a junior in the university.
            </div>
          </div>

          <div className="mt-3">
            <h4>
              About me
            </h4>
            <p>
              Hello!<br/>
              My name is David, just a nickname I want to be called at here.<br/>
              I was born and raised in a countryside, Quang Nam province in Viet Nam. My family has 4 people.
            </p>

            <p>
              I have a lot of memories in my hometown. After 12 years studying in hometown, I passed into Bach Khoa University. In 2015, I went to Ho Chi Minh city to study Computer Science.
            </p>
          </div>

          <br />
          {/* footer */}
          <footer className="row border-top border-white p-1">
            <div className="col-md-4">
              <div className="my-1">
                <b>Contact</b>
              </div>

              <div className="my-1">
                <Phone fontSize="large"/>
                <span className="ml-3">0965 075 940</span>
              </div>

              <div className="my-1">
                <Email fontSize="large"/>
                <span className="ml-3">tjinlag@gmail.com</span>
              </div>
            </div>

            <div className="col-md-8 d-flex align-items-center justify-content-center">
              <span>"Choose a job you love, and you'll never have to work a day in your life."</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
