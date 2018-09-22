import React, { Fragment } from 'react'

const ModalButton = ({ toggleModal }) => {
  return (
    <div className="modalButtonContainer">
        <h3>Subscribe to our Mailing-List</h3>
      <button className="modalButton" onClick={toggleModal}>Subscribe</button>
    </div>
  )
}

export default ModalButton;