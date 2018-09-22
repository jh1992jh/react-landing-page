import React from 'react'

const ImageAndText = ({headline, image, text, textTwo, textHeadline}) => {
  return (
    <div className="imageAndText">
      {headline ? <h3>{headline}</h3> : null}
      <img src={image} alt="Man with a suit"/>
      <p className="text">
      {textHeadline ? <span className="bolded">{textHeadline} </span> : null}
      {text}
      </p>

      {textTwo ? <p className="text">{textTwo}</p> : null}
    </div>
  )
}

export default ImageAndText;