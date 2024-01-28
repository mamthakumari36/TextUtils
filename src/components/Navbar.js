import React from 'react'  // rfc for react function comp.
import PropTypes from 'prop-types'
import { Link as LinkRoute} from 'react-router-dom';

export default function Navbar(props) {

    const togglecolor1 = () => {
        document.body.style.backgroundColor = "grey"
    }
    const togglecolor2 = () => {
        document.body.style.backgroundColor = "purple"
    }
    const togglecolor3 = () => {
        document.body.style.backgroundColor = "#1a6b8a"
    }
    const togglecolor4 = () => {
        document.body.style.backgroundColor = "blue"
    }


    return (
        <nav className={`navbar navbar-expand-lg  bg-${props.mode}`} >
            <div className="container-fluid">
                <div className="navbar-brand"  style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <LinkRoute className="nav-link active"  to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</LinkRoute>
                        </li>
                        <li className="nav-item">
                            <LinkRoute className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.aboutTxt}</LinkRoute>
                        </li>

                    </ul>
                   
                    <button onClick={togglecolor1} style={{ backgroundColor: 'grey', width: '25px', height: '25px' }}></button>
                    <button onClick={togglecolor2} style={{ backgroundColor: 'purple', width: '25px', height: '25px' }}></button>
                    <button onClick={togglecolor3} style={{ backgroundColor: '#1a6b8a', width: '25px', height: '25px' }}></button>
                    <button onClick={togglecolor4} style={{ backgroundColor: 'blue', width: '25px', height: '25px', marginRight: '20px' }}></button>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTxt: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutTxt: 'About'
}