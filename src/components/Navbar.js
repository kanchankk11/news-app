import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="./logo96.png" alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                News.io
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
      </>
    )
  }
}