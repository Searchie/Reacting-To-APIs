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

    return(
        <div className="grid">
            {listItems}
        </div >
    )
}

export default CardList;