import React, { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Section2 from '../components/section2.jsx'




class Container extends Component {
  handleClick = () => {
    window.location.href = '#how-it-works'
  }
  
  render() {
    return (
      <Layout>
        <Header eventClick={this.handleClick} />
        <Section2 />
      </Layout>
    )
  }
}

export default Container