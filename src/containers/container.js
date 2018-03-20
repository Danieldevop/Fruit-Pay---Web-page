import React, { Component } from 'react'
import Header from '../components/header'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Footer from '../components/footer'
import img from '../img/s2x.png'
import img1 from '../img/sp.png'
import img2 from '../img/spend.gif'


class Container extends Component {
  handleClick = () => {
    window.location.href = '#how-it-works'
  }
  style = {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#4D7FE9',
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontSize: '20px',
    lineHeight: '50px',
    textAlign: 'center',
    margin: 0,
    height: '50px',
    padding: '0px 33px',
    borderRadius: '19px',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    WebkitFontSmoothing: 'antialiased',
    MozSsxFontSmoothing: 'grayscale',
  }
  render() {
    return (
      <div>
        <Header
          widthLogo={45}
          img={img}
          hrefLogo={'index.html'}
          href1={'https://www.youtube.com/watch?v=mrORbZ2dS08'}
          href2={'#'}
          title={'Seebaly'}
          link1={'$'}
          link2={'Demo'}
        />
        <Section1 
          imgLogo={img1}
          imgLogoWidth={300}
          text1={'Compra y retira facilmente tus criptomonedas.'}
          imgPrincipal={img2}
          imgPrincipalWidth={500}
          eventClick={this.handleClick}
          btnTxt={'Compra ahora'}
        />
        <Section2 
          howWorks={'¿Como Funciona?'}
          p1={'Imagina que tienes un restaurante de tacos'}
          img1={'https://png.icons8.com/color/40/000000/taco.png'}
          p2={'Y un cliente desea pagarte con tarjeta de crédito. pero sabes que lo normal es que cada pago incluya costosas comisones por transacción'}
          img2={'https://png.icons8.com/dusk/40/000000/money.png'}
          p3={'Pensando en tí hemos creado una plataforma de pagos que te permite...'}
          p4={'Pagar gastar y realizar transferencias entre amigos, familiares y locales comerciales'}
          img3={'https://png.icons8.com/color/40/000000/connection-sync.png'}
          p5={'Con 0% comisiones'}
          img4={'https://png.icons8.com/color/40/000000/clenched-fist.png'}
          p6={'¡Y todos Felices!, ahora tienes una manera de realizar pagos y transferencias de manera gratuita'}
        />
        <Section3 
          style={this.style}
          textBtn={'Contáctanos'}
        />
        <Footer 
          title={'Estámos construyendo el futuro del sistema finaciero'}
          subTitle={'© 2018 Seebaly'}
        />
      </div>
    )
  }
}

export default Container