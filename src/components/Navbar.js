import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

//remember to close every tag in html like here <hr/> & <input/>
//also replace 'class' with 'className'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>    {/*using template literals={``} and then using variables in it*/}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>  {/**replacing a with Link and href with to | if we use a & href then the page will reload */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>     *replacing a with Link and href with to */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>     {/**replacing a with Link and href with to */}
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>{/**if we use a & href then the page will reload */}
                        {/* </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>            
                        </li> */}

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">{props.searchBtn}</button>
                    </form>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        {/*${props.mode==='light'?'dark':'light'}  using turnary operators here(if mode is light then evaluate it to dark, if dark evaluate it to light)*/}
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enableText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//defining proptype(type of properties) here we have defined it as string here:     '.isRequired' it is simply as 'required' used in html form
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    searchBtn: PropTypes.string
}
//now setting default props aka placeholders 
Navbar.defaultProps = {
    title: 'Enter title here',
    aboutText: 'Enter About here',
    searchBtn: 'Enter Search here'
}