import React from 'react';

const Navigation = ({menu,children}) => {
    return (
        <nav className='menu'>
            <div className={'content-menu ' + menu}>
                {children}
            </div>
        </nav>
    );
};

export default Navigation;