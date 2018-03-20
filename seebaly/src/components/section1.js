import React from 'react'

const Section1 = props => (
  <section className="container display-5 space animated animatedFadeInUp fadeInUp">
    <figure>
      <img className="img-fluid mx-auto d-block" src={props.imgLogo} alt="Seebaly Pay" width={props.imgLogoWidth} />
    </figure>
    <p className="font1 text-center mt-3 font-weight-bold">{props.text1}</p>
    <div className="container">
      <img className="img-fluid mx-auto d-block " alt="" src={props.imgPrincipal} width={props.imgPrincipalWidth} />
    </div>
    <div className="d-flex justify-content-center space1">
      <button className="btn-lg btn0 px-5 mt-1" onClick={props.eventClick} >
        <strong>{props.btnTxt}</strong>
      </button>
    </div>
  </section>
)

export default Section1