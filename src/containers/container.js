import React, { Component } from 'react'
import Header from '../components/header'
import Section2 from '../components/section2'
import Footer from '../components/footer.jsx'
import img from '../img/seebaly.png'
import img2 from '../img/cloud.gif'


class Container extends Component {
  handleClick = () => {
    window.location.href = '#how-it-works'
  }
  
  render() {
    return (
      <div>
        <Header
          widthLogo={100}
          img={img}
          hrefLogo={'index.html'}
          link1={'Pricing'}
          link2={'FAQ'}
          text1={'Transfers and Pay, all in One app.'}
          imgPrincipal={img2}
          imgPrincipalWidth={200}
          eventClick={this.handleClick}
          btnTxt={'Send Now'}
        />
        <Section2
          textBtn={'Support'}
          title={'We are making your money'}
          subTitle={'© 2018 Seebaly'}
        />
        <Footer/>
      </div>
    )
  }
}

export default Container