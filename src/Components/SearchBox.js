import React from 'react';


const SearchBox =({searchfield,searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green br2 bg-lightest-blue'
                type='search' 
                placeholder='Search RoboFriends'
                onChange={searchChange}
            />
        </div>
    )
}



export default SearchBox;