import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { baseUrl } from '../config';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return (
                    <div>
                        <li>
                            <a href={`/auth/google`}>
                                Login With Google
                            </a>
                        </li>
                    </div>
                );
            case false:
                return (
                    <div>
                        <li>
                            <a href={`/auth/google`}>
                                Login With Google
                            </a>
                        </li>
                    </div>
                );
            default:
                return (
                    <div>
                        <li>
                            <a>
                                Logout
                            </a>
                        </li>
                    </div>
                );
        }
    }


    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <Link
                    to={ this.props.user ? '/surveys' : '/'}
                    className='left brand-logo'
                >
                Brand Name
                </Link>
                <ul className="right">
                    { this.renderContent() }
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth,
    };
}

export default connect(mapStateToProps)(Header);
