import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-container">
            <div className="container1">
                <img src={ props.icone1 } />
                <span>{ props.email }</span>
            </div>
            
                
            <div className="container2">
                <img src={ props.icone2 } />
                <span>{ props.endereco }</span>
            </div>
            
        </div>
    )
}

export default CardPequeno;

