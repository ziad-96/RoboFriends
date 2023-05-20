import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc grow br3 bg-dark-blue pa3 ma2 dib bw2 shadow-2'>

            <img alt = 'robots'  src={`https://robohash.org/${id}?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;