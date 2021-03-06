import React from 'react'
import './section2.css'
import fruit from '../img/fruitlogo.png'
import store from '../img/store.png'
import send from '../img/send.png'
import pay from '../img/pay.png'
import web from '../img/web.png'

function Section2(props) {
  return (
    <div className="">
      <section className="space">
        <div className="container pretext desktop">
          <img className="d-block img-fluid mx-auto" src={fruit} alt="" width="80" />

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="img-fluid mx-auto d-block img-fit" src={store} alt="person" width="" />
              </div>
              <div className="col-md marginTxt">
                <h1 className="mb-5 mt-5 tip">Store your cards</h1>
                <p className="fitText">
                  If you have credit/debit or prepaid cards,
                  store them like a physical wallet in your phone.
                  We then store your private data securely, allowing
                  you to purchase and send money without typing your
                  information.
                </p>
              </div>
            </div>
          </div>

          <div className="spa">
            <div className="row">
              <div className="col-md marginTxt1">
                <h1 className="mb-5 mt-5 tip t1">Send Money</h1>
                <p className="fitText1">
                  Just like texting with friends, you can send
                  and receive money between family and friends
                  in seconds, pay on stores, and split your bills
                  like sharing a photo in whatsapp.
                </p>
              </div>
              <div className="col-md">
                <img className="img-fluid mx-auto d-block img-fit1" src={send} alt="person" width="" />
              </div>
            </div>
          </div>

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="img-fluid mx-auto d-block" src={pay} alt="person" width="" />
              </div>
              <div className="col-md marginTxt2">
                <h1 className="mb-5 mt-5 tip">Pay in Stores</h1>
                <p className="fitText">
                  without swiping your card or sharing your
                  card information, pay scanning a QR code
                  in physical stores.
                </p>
                <p className="fitText">
                  If you are a business you can use Fruit to
                  receive card payments without installing a
                  card reader.
                </p>
              </div>
            </div>
          </div>

          <div className="spa">
            <h1 className="mb-5 mt-5 tip t1">Pay on websites</h1>
            <div className="row">
              <div className="col-md">
                <img className="web img-fluid mx-auto d-block " src={web} alt="person" width="" />
              </div>
              <div className="col-md">
                <p className="fitText">
                  One secure way to pay online without leaving your card
                  information on the page, also if you have an Online
                  business you can set your online payments easily using
                  Qr codes.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="container pretext mobile">
          <img className="d-block img-fluid mx-auto" src={fruit} alt="" width="80" />

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="img-fluid mx-auto d-block img-fit" src={store} alt="person" width="" />
              </div>
              <div className="col-md">
                <h1 className="mb-3 mt-5 tip">Store your cards</h1>
                <p className="fitText">
                  If you have credit/debit or prepaid cards,
                  store them like a physical wallet in your phone.
                  We then store your private data securely, allowing
                  you to purchase and send money without typing your
                  information.
                </p>
              </div>
            </div>
          </div>

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="img-fluid mx-auto d-block img-fit1" src={send} alt="person" width="" />
              </div>
              <div className="col-md marginTxt1">
                <h1 className="mb-3 mt-5 tip t1">Send Money</h1>
                <p className="fitText1">
                  Just like texting with friends, you can send
                  and receive money between family and friends
                  in seconds, pay on stores, and split your bills
                  like sharing a photo in whatsapp.
                </p>
              </div>
            </div>
          </div>

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="img-fluid mx-auto d-block" src={pay} alt="person" width="" />
              </div>
              <div className="col-md marginTxt2">
                <h1 className="mb-3 mt-5 tip">Pay in Stores</h1>
                <p className="fitText">
                  without swiping your card or sharing your
                  card information, pay scanning a QR code
                  in physical stores.
                </p>
                <p className="fitText">
                  If you are a business you can use Fruit to
                  receive card payments without installing a
                  card reader.
                </p>
              </div>
            </div>
          </div>

          <div className="spa">
            <div className="row">
              <div className="col-md">
                <img className="web img-fluid mx-auto d-block " src={web} alt="person" width="350" />
              </div>
              <div className="col-md">
                <h1 className="mb-3 mt-2 tip t1">Pay on websites</h1>
                <p className="fitText">
                  One secure way to pay online without leaving your card
                  information on the page, also if you have an Online
                  business you can set your online payments easily using
                  Qr codes.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="mates"></div>
      </section>
    </div>
  )
}

export default Section2