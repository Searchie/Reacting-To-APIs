import React from 'react';
import ghilbi from '../images/ghilbi.jpg';

const GhilbiLogo = (props) => {
    return(
            <React.Fragment>
                <img
                    src={ghilbi}
                    alt="Ghilbi Logo"
                />
            </React.Fragment>
    );
}



export default GhilbiLogo;