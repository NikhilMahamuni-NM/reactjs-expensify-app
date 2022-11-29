import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
        <div>
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <NavLink className="header__title" to="/">
                            <h1>Expensify</h1>
                        </NavLink>
                    </div>
                </div>
            </header>
            <div className="header__navbar">
                <div className="content-container">
                    <NavLink 
                        to="/create"
                        className="button"
                    >
                        Create Expense
                    </NavLink> 
                </div>
            </div>
        </div>
)

export default Header;