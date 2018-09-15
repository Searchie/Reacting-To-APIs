import React from 'react';

const Card = (props) => {
    return(
        <div className="card border-info">
            <img 
                className="card-img-top" 
                src="#" 
                alt="Card top"
            />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardBodyText}</p>
            </div>
        </div>
    );
}


export default Card;