import React from 'react'
import './section2.css'
import globe from '../img/globe.png'
import fyf from '../img/fyf.png'
import merchant from '../img/merchant.png'

function Section2(props) {
  return (
    <div className="">
      <div className="wave">
        <section className="container trans ">
          <h2 className="text-center p1" >This is what you do with moneyX</h2>
          <div className="row pretext">
            <div className="col-md b1">
              <img className="img-fluid mx-auto d-block" src={globe} alt="" width="" />
              <p className="text-center mt-3">Real Time* global payments</p>
            </div>
            <div className="col-md b2">
              <img className="img-fluid mx-auto d-block" src={fyf} alt="" width="100" />
              <p className="text-center mt-3">Friends and family money transfers</p>
            </div>
            <div className="col-md b3">
              <img className="img-fluid mx-auto d-block" src={merchant} alt="" width="" />
              <p className=" mt-3 text-left">Set up your payment system for your Businesses, e-commerce and startup.</p>
            </div>
          </div>
        </section>
      </div>
      <section className="space">
        <div className="wave1"></div>
        <div className="container">
          <h1>For persons</h1>
          <p>Splitting bills</p>
          <p>Sending remittances</p>
          <p>Account transfer</p>
          <h1>For Businesses</h1>
          <p>With our simply checkout you can receive payments worldwide from moneyX users and non moneyx users directly to your account </p>
          <p>Efficient funds disbursement options for a variety of different applications </p>
          <p>
            Reimbursements
            Refunds
            Rebates
            Payouts
            Loan distributions
            Government disbursements
        </p>
        </div>
      </section>
    </div>
  )
}

export default Section2