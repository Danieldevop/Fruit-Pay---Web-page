import React from 'react'

function Section2(props) {
  return (
    <section className="sect1 p-2" id="how-it-works">
      <h1 className="display-4 text-center font-weight-bold pt-5 mb-5">
        <span className="text-gradient">{props.howWorks}</span>
      </h1>
      <div className="container pb-5">
        <div className="row d-block">
          <p className="col-lg-9 col-md-9 align-self-end ms-font bubble">
            {props.p1}
					<img src={props.img1} alt=""/>
          </p>
          <p className="col-lg-12 col-md-12	align-self-center ms-font bubble1">
            {props.p2}
					<img src={props.img2} alt=""/>
          </p>
          <p className="col-lg-11 col-md-11 align-self-start ms-font bubble">
            {props.p3}
				  </p>
          <p className="col-lg-10 col-md-10 align-self-end ms-font bubble1">
            {props.p4}
					<img src={props.img3} alt=""/>
          </p>
          <p className="col-lg-3 col-md-4 align-self-center ms-font bubble">
            {props.p5}
					<img src={props.img4} alt=""/>
          </p>
          <p className="col-lg-9 col-md-10 align-self-start ms-font bubble1">
            {props.p6}
          </p>
        </div>
      </div>
    </section>
  )
} 

export default Section2