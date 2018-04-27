import React, { Component } from 'react'
import Header from '../components/header'
import Section2 from '../components/section2'
import Footer from '../components/footer.jsx'
import img from '../img/seebaly.png'
import img2 from '../img/cloud.png'


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
          href1={''}
          href2={'#'}
          link1={'xoxo'}
          link2={'FAQ'}
          text1={'Send your money in seconds.'}
          imgPrincipal={img2}
          imgPrincipalWidth={300}
          eventClick={this.handleClick}
          btnTxt={'Send!'}
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