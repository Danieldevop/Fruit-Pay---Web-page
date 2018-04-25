import React from 'react'

function Header(props) {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href={props.hrefLogo}>
            <img src={props.img} width={props.widthLogo} height="" alt="seebaly" />
          </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-light font-weight-bold" href={props.href1}>{props.link1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light font-weight-bold ml-md-3" href={props.href2}>{props.link2}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
