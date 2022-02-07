import React from 'react'
import '../css/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
                <img className="header__logo"
                src="https://assets-global.website-files.com/5f7adad57379a36d83a3972a/602c1b470faa6d98ccdb231f_salams_site_logo.svg" alt="tinder logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
