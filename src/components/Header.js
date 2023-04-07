import React from 'react';

const Header = ({classPage,children}) => {
    return (
        <header className="en-tete ">
            <div className={"contente " + classPage}>
                {children}
            </div>
        </header>
    ); 
};

export default Header;