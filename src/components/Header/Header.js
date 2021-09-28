import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <header className="w3-container w3-center w3-padding-32">
                <h1><b>MY BLOG</b></h1>
                <p>Welcome to the blog of <span className="w3-tag">unknown</span></p>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li><NavLink activeClassName="myActiveLink" to="/test">Test1</NavLink></li>*/}
                {/*        <li><NavLink activeClassName="myActiveLink" to="/test2">Test2</NavLink></li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
            </header>
        )
    }
}

export default Header;