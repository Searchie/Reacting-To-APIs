import React from 'react';
import Card from './Card';

const CardList = (props) => {
    let listItems = []

        if (props.dataType === 'People') {
            listItems = props.items.map(item => {
                return(
                    <React.Fragment>
                        <Card 
                            cardTitle={item.name}
                            age={item.age}
                            gender={item.gender}
                            json={item}
                            dataType={props.dataType}
                            url={item.url}
                        />  
                    </React.Fragment>
                )
            })
        } else {
            listItems = props.items.map(item => {
                return(
                    <React.Fragment>
                        <Card 
                            cardTitle={item.title}
                            cardBodyText={item.description}
                            dataType={props.dataType}
                            url={item.url}
                        /> 
                    </React.Fragment>
                )
            })
        } 

    return(
        <div className="container">
            <div className="border-bottom"><h3>{props.dataType}</h3></div>
            <div className="row justify-content-center">{listItems}</div>
        </div >
    )
};

export default CardList;