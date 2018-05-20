import React from 'react'
import './section2.css'
import globe from '../img/globe.png'
import fyf from '../img/fyf.png'
import merchant from '../img/merchant.png'
import person from '../img/person.png'
import corporate from '../img/corporate.png'

function Section2(props) {
  return (
    <div className="">
      <div className="wave">
        <section className="container trans ">
          <h2 className="text-center p1" >This is MoneyX</h2>
          <div className="row pretext">
            <div className="col-md b1">
              <img className="img-fluid mx-auto d-block" src={globe} alt="" width="" />
              <p className="text-center mt-3">Real Time* payments card to card</p>
            </div>
            <div className="col-md b2">
              <img className="img-fluid mx-auto d-block" src={fyf} alt="" width="100" />
              <p className="text-left mt-3">Friends and family money transfers in your country and real time remittances.</p>
            </div>
            <div className="col-md b3">
              <img className="img-fluid mx-auto d-block" src={merchant} alt="" width="" />
              <p className=" mt-3 text-left">Businesses persons and institutions can receive payments avoiding the ACH IBAN and other slow systems.</p>
            </div>
          </div>
        </section>
        <div className="wave1"></div>
      </div>
      <section className="space">
        <div className="container pretext separation">
          <h1 className="text-center mb-5 mt-5 tip">Superpowers For persons</h1>
          <div className="row">
            <div className="col-md">
              <img className="img-fluid mx-auto d-block " src={person} alt="person" width="600" />
            </div>
            <div className="col-md">
              <p>Pay on apps</p>
              <p>Pay on websites</p>
              <p>Pay with Splitting bills</p>
              <p>Send remittances</p>
              <p>Send and receive money from clients, friends and familiars</p>
            </div>
          </div>
          <h1 className="text-center mb-5 mt-5 tip">Superpowers For Businesses and Goverments</h1>
          <div className="row">
            <div className="col-md">
              <img className="img-fluid mx-auto d-block " src={corporate} alt="person" width="600" />
            </div>
            <div className="col-md">
              <p>With our simply checkout you can receive payments worldwide directly to your account </p>
              <p>Funds disbursement options for a variety of different situations </p>
              <p>
                Reimbursements
                Refunds
                Rebates
                Payouts
                Loan distributions
                Government disbursements
              </p>
            </div>
          </div>
        </div>
        <div className="mates"></div>
        <div className="mates mt-5"></div>
      </section>
    </div>
  )
}

export default Section2