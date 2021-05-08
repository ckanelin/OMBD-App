import React from 'react';
import './Modal.css'


const Modal = ({show, hideModal}) => {

	const showHideClassName = show? "modal display-block" : "modal display-none";
	return(
		<div className={showHideClassName}>
      		<section className="modal-main">
      			<div className='flex tc'>
					<div class="close pa2" onClick={hideModal}></div>
        		</div>
                <h3 className= 'yellow tc pt2 pb4'>
                    You have nominated 5 movies!
                </h3>
      		</section>
    	</div>
    );
	
}

export default Modal;