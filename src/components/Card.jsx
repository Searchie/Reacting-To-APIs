import React from 'react';

const Card = (props) => {
    return(
        <div className="card border-dark m-3 bg-light">
            {/* <img 
                className="card-img-top" 
                src="#" 
                alt="Card top"
            /> */}
            <div className="card-body">
                <h5 className="card-title text-info">{props.cardTitle}</h5>
                <p className="card-text">{props.cardBodyText}</p>
            </div>
        </div>
    );
}


export default Card;