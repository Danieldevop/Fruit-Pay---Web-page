import React from 'react'

function Header(props) {
  return (
    <div className="bg">
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
              <p className="font1 text-center"><span className="global">Global</span> payments experiences.</p>
            </div>
            <div className="col-sm">
              <img className="img-fluid mx-auto d-block " alt="" src={props.imgPrincipal} width={props.imgPrincipalWidth} height={100} />
              <div className="d-flex justify-content-center space1">
                <button className="btn-lg btn0 px-5 mt-3" onClick={props.eventClick} >
                  <svg width="15" height="12">
                    <polygon fill="white" points="5.400004932295694 6.000000986459138 0.8000049322956935 9.700000986459138 2.1000049322956933 11.300000986459139 8.600004932295693 6.000000986459138 2.1000049322956933 0.7000009864591387 0.8000049322956935 2.3000009864591386"></polygon>
                  </svg>
                  <strong>{props.btnTxt}</strong>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Header
