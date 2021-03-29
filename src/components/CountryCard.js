import React from 'react'
import {Link} from 'react-router-dom';
const CountryCard = ({country}) => {
    return (
        <div className = 'card mb-1'>
            <div className = 'card-body' style={{ height:'120px', position: 'relative'}}>
                <Link to={'/' + country.name }>
                    <h5 className='card-title'> { country.name }</h5>
                </Link>
            
                <p style={{position: 'absolute',bottom: '5px'}}>{country.nativeName}</p>
            </div>
        </div>
    )
}
export default CountryCard;
