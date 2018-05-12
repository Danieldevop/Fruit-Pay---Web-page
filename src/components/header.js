import React from 'react'

function Header(props) {
  return (
    <div className="coverwave">
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <a className="navbar-brand" href={props.hrefLogo}>
              <img src={props.img} width={props.widthLogo} height="" alt="moneyX" />
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link text-dark font-weight-bold" href='' >{props.link1}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark font-weight-bold ml-md-3" href='' >{props.link2}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="container display-5 space animated animatedFadeInUp fadeInUp ">
        <div className="row">
          <div className="col-sm">
            <p className="font1 text-center">{props.text1}</p>
          </div>
          <div className="col-sm">
            <img className="img-fluid mx-auto d-block " alt="" src={props.imgPrincipal} width={props.imgPrincipalWidth} height={100} />
            <div className="d-flex justify-content-center space1">
              <button className="btn-lg btn0 px-5 mt-3" onClick={props.eventClick} >
                <strong>{props.btnTxt}</strong>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Header
