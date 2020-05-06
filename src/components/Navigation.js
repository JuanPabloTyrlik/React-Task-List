import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (  
            <nav className="navbar navbar-dark bg-dark">
                <a href="http://localhost:3000" className="text-white">
                    { this.props.title }
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.count}
                    </span>
                </a>
            </nav>
        );
    }
}
