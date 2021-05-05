import React from 'react';
import './Modal.css'


const Modal = ({show, hideModal}) => {

	const showHideClassName = show? "modal display-block" : "modal display-none";
	return(
		<div className={showHideClassName}>
      		<section className="modal-main">
      			<div className='flex justify-end ma2'>
        			<button className='close-window-button' onClick={hideModal}>x</button>
        		</div>
                <h3 className= 'gold tc pt2 pb4'>
                    You have nominated 5 movies!
                </h3>
      		</section>
    	</div>
    );
	
}

export default Modal;