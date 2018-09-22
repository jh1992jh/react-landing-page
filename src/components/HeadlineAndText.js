import React from 'react'

const HeadlineAndText = ({headline, text, textTwo}) => {
  return (
    <div className="headlineAndText">
      <h3>{headline}</h3>
      <p className="text">{text}</p>
      {textTwo ? <p className="text">{textTwo}</p> : null}
    </div>
  )
}

export default HeadlineAndText;