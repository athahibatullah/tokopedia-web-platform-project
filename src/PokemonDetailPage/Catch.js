import React, { useState, Component } from 'react';
import './Catch.css';
import { Modal} from './Modal.js';

class Catch extends Component{
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
          <main>
            <Modal show={this.state.show} handleClose={this.hideModal}>
            </Modal>
            <div className="containerCatch">
                <button type="button" onClick={this.showModal}>CATCH</button>
            </div>
          </main>
        );
    }
}

export default Catch;