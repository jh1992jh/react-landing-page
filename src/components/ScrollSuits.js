import React, { Component, Fragment } from 'react'
import { imagesAndInfo } from '../images';

class ScrollSuits extends Component {
  render() {
    let output =  imagesAndInfo.map((image, i) => (
        <Fragment key={i}>
        <img src={image.image} alt="price"/>
        <p>{image.name}</p>
        <p>{image.price}</p>
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