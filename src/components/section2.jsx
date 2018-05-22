import React from 'react'
import './section2.css'
import globe from '../img/globe.svg'
import fyf from '../img/fyf.svg'
import merchant from '../img/share.svg'
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
              <img className="img-fluid mx-auto d-block" src={globe} alt="" width="90" />
              <p className="text-center mt-3">Real Time* payments</p>
            </div>
            <div className="col-md b2">
              <img className="img-fluid mx-auto d-block" src={fyf} alt="" width="90" />
              <p className="text-center mt-3">Transfer money to family and friends using your mobile phone.</p>
            </div>
            <div className="col-md b3">
              <img className="img-fluid mx-auto d-block" src={merchant} alt="" width="90" />
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
              <p>Send and receive money from clients<br/> friends and familiars</p>
            </div>
          </div>
          <h1 className="text-center mb-5 mt-5 tip">Superpowers For Businesses and Goverments</h1>
          <div className="row">
            <div className="col-md">
              <img className="img-fluid mx-auto d-block " src={corporate} alt="person" width="600" />
            </div>
            <div className="col-md">
              <p>Receive payments worldwide directly to your account </p>
              <p>Funds disbursement options for a variety of different situations </p>
              <p>Manage Refunds</p>
              <p>Manage Rebates</p>
              <p>Manage Loan distributions</p>
              <p>Government disbursements</p>
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