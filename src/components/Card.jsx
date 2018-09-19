import React from 'react';

const Card = (props) => {

    if (props.dataType === 'People') {
        return(
            <div className="card border-dark m-3 bg-light">
                <div className="card-body">
                    <h5 className="card-title text-info">{props.cardTitle}</h5>
                    <ul className="card-text">
                        <li><b>Age:</b> {props.age}</li>
                        <li><b>Gender:</b> {props.gender}</li>
                        <li><b>Link:</b> <a href={props.url}>JSON Data</a></li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return(
            <div className="card border-dark m-3 bg-light">
                <div className="card-body">
                    <h5 className="card-title text-info">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardBodyText}</p>
                    <a className="card-text" href={props.url}>JSON Data</a>
                </div>
            </div>
        );
    }
}


export default Card;