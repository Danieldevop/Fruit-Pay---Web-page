import React from 'react'
import './header.css'
import img from '../img/fruit.png'
import img2 from '../img/fruitPay.png'

const Header = (props) => (
  <div className="bg">
    <div className="">
      <header className="header container justify-content-center">
        <nav className="navbar navbar-light">
          <a className="navbar-brand mx-auto" href="">
            <img src={img} width="" height="40" alt="FruitPay" />
          </a>
        </nav>
      </header>
      <div className="wave2"></div>
      <div className="wave3"></div>
      <section className="container space animated animatedFadeInUp fadeInUp desktop">
        <div className="row">
          <div className="col-sm">
            <p className="font1">Payments made <span className="global">simple</span></p>
            <p className="intro">
              Send and receive money like chatting with your
              friends, all over the world and pay on stores
              websites with Qr codes.
            </p>
          </div>
          <div className="col-sm">
            <img className="img-fluid mx-auto d-block " alt="fruit" src={img2} width="500" height="" />
            <div className="d-flex justify-content-center space1">
              <button className="btn-lg btn0 px-5 mt-3" onClick={props.eventClick} >
                <svg width="15" height="12">
                  <polygon fill="white" points="5.400004932295694 6.000000986459138 0.8000049322956935 9.700000986459138 2.1000049322956933 11.300000986459139 8.600004932295693 6.000000986459138 2.1000049322956933 0.7000009864591387 0.8000049322956935 2.3000009864591386"></polygon>
                </svg>
                <strong>Send now</strong>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space animated animatedFadeInUp fadeInUp mobile">
        <div className="row">
          <div className="col-sm">
            <img className="img-fluid mx-auto d-block phoneImg" alt="fruit" src={img2} width="500" height="" />
            <div className="d-flex justify-content-center space1">
              <button className="btn-lg btn0 px-5 mt-3" onClick={props.eventClick} >
                <svg width="15" height="12">
                  <polygon fill="white" points="5.400004932295694 6.000000986459138 0.8000049322956935 9.700000986459138 2.1000049322956933 11.300000986459139 8.600004932295693 6.000000986459138 2.1000049322956933 0.7000009864591387 0.8000049322956935 2.3000009864591386"></polygon>
                </svg>
                <strong>Send now</strong>
              </button>
            </div>
          </div>
          <div className="col-sm">
            <p className="font1">Payments made <span className="global">simple</span></p>
            <p className="intro">
              Send and receive money like chatting with your
              friends, all over the world and pay on stores
              websites with Qr codes.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default Header
