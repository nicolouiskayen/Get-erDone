import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Redux Auth</Link>                
            </div>
        )
    }
}

export default Header;