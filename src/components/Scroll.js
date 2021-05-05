import React from 'react';

const Scroll = ({height, children}) => {

	return(
		<div 
			style={{overflowY: 'Scroll', height: '60vh' }} 
			className='ma2'
		>
			{children}
		</div>
	);

}

export default Scroll;