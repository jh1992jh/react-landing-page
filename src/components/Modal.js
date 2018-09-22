import React, { Component } from 'react'

class Modal extends Component {
  render() {
    const { modalOn, toggleModal, animation } = this.props; 
    return (
      modalOn === true ? (
        <div className="modalBackground" onClick={toggleModal} style={modalOn === true ? {animation: 'appearAnim 0.5s'} : {animation: 'disappearAnim 0.5s'}}>
        <div className="modalWrapper">
            <div className="modalContent">
            <i className="fas fa-times"  onClick={toggleModal} />
        
                    <form className="modalForm">
                        <div className="modalInput">
                        <i className="fas fa-user-tie" />
                            <input type="text" placeholder="Firstname"/>
                        </div>
                        <div className="modalInput">
                        <i className="fas fa-user-tie" />
                            <input type="text" placeholder="Lastname"/>
                        </div>
                        <div className="modalInput">
                        <i className="fas fa-at" />
                            <input type="email" placeholder="Email"/>
                        </div>

                        <button>
                        Subscribe <i className="fas fa-envelope-square" /> 
                        </button>
                    </form>
                </div>
           
        </div>
      </div>
      ) : null
    )
  }
}

export default Modal;