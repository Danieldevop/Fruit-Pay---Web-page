import React, { Component } from 'react'
import Header from '../components/header'
import Section2 from '../components/section2.jsx'
import img from '../img/moneyx.png'
import img2 from '../img/amex.png'


class Container extends Component {
  handleClick = () => {
    window.location.href = '#how-it-works'
  }
  
  render() {
    return (
      <div>
        <Header
          widthLogo={125}
          img={img}
          hrefLogo={'index.html'}
          link1={'Pricing'}
          link2={'FAQ'}
          text1={'Global payments experiences.'}
          imgPrincipal={img2}
          imgPrincipalWidth={500}
          eventClick={this.handleClick}
          btnTxt={'Send Now'}
        />
        <Section2 />
      </div>
    )
  }
}

export default Container