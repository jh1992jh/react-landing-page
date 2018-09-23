import React, { Component, Fragment } from 'react'
import { imagesAndInfo } from '../images';

class ScrollSuits extends Component {
  render() {
    let output =  imagesAndInfo.map((image, i) => (
        <Fragment key={i}>
        <img src={image.image} alt="price"/>
        <p className="forMobile">{image.name}</p>
        <p className="forMobile">{image.price}</p>
        <div className="forDesktop">
        <p>{image.name}</p>
        <p>{image.description}</p>
        <p>{image.price}</p>
        </div>
        </Fragment>
    ))

    return (
      <div className="scrollSuits">
        {output}
      </div>
    )
  }
}

export default ScrollSuits;