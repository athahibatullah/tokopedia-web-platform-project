import React, { useState } from 'react'

export const Modal = ({ handleClose, show, children}) => { 
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    function deletePokemon(){
        localStorage.clear();
      }
    return (
        <>
          <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <div className="containerModal">
                <h1>You are going to release all your pokemon. Click confirm to delete</h1>
                <button type="button" onClick={deletePokemon}>Confirm</button><br></br>
                <button type="button" onClick={handleClose}>
                    Cancel
                </button><br></br>
            </div>
          </section>
        </div>
        </>
      );
}