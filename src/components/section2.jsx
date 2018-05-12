import React from 'react'
import './section2.css'
import mpay from '../img/mpay.svg'
import mpay2 from '../img/mpay2.svg'
import merchant from '../img/mcard.svg'

function Section2(props) {
  return (
    <div>
      <section className="container mt-2">
        <h1 className="text-center p1" >What can you do with moneyx?</h1>
        <div className="row">
          <div className="col-md bubble">
            <img className="img-fluid mx-auto d-block" src={mpay} alt="" width="100" />
            <p className="text-center ">Real Time* Global payments</p>
          </div>
          <div className="col-md bubble ml-4">
            <img className="img-fluid mx-auto d-block" src={mpay2} alt="" width="100" />
            <p className="text-center">Friends and family transfers</p>
          </div>
          <div className="col-md bubble ml-4">
            <img className="img-fluid mx-auto d-block" src={merchant} alt="" width="100" />
            <p className="text-center">Global payments for Businesses, e-commerce and startups</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2