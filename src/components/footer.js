import React from 'react'

function Footer(props) {
  return (
    <footer className="foo text-center pt-5 p-1">
      <p className="font-weight-bold">{props.title}</p>
      <p className="font-weight-bold">{props.subTitle}</p>
    </footer>
  )
}

export default Footer