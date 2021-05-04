import React from 'react';

const SearchBar = () => {
    return(
        <input
            type='Search'
            placeholder='Movie Title'
            className='pa1 br2 w-100'
            // onKeyDown={handleKeyDown}
        />
    );
}

export default SearchBar;