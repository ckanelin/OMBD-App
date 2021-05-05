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
                <div className='lightest-blue tc ma3'>
                    You have nominated 5 movies
                </div>
      		</section>
    	</div>
    );
	
}

export default Modal;