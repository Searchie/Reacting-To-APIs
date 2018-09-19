import React from 'react';

const Menu = (props) => {
    return(
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
                <input type="radio" name="options" id="movieOption" autocomplete="off" checked />Movies
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="options" id="peopleOption" autocomplete="off" />People
            </label>
        </div>
    )
}

export default Menu;