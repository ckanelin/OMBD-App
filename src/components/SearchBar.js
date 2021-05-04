import React from 'react';

const SearchBar = ({searchChange, keyPress}) => {
    return(
        <input
            type='Search'
            placeholder='Movie Title'
            className='pa1 br2 w-100'
            onChange={searchChange}
            onKeyDown={keyPress}
        />
    );
}

export default SearchBar;