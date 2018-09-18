import React from 'react';
import Card from './Card';

const CardList = (props) => {

    let listItems = props.items.map((item) => {
        return(
            <Card 
                key = {item.key}
                cardTitle={item.title}
                cardBodyText={item.description}
            />
        );
    });

    let dataType = '';

    switch (props.dataType) {
        case 'movies': dataType = 'movies'
        break;
        case 'people': dataType = 'people'
        break;
        default: dataType = 'movies'
    }

    return(
        <div className="container">
            <div className="border-bottom"><h3>{dataType}</h3></div>
            <div className="row justify-content-center">{listItems}</div>
        </div >
    )
}

export default CardList;