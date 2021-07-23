import React, {useContext} from "react";
import {Link} from "react-router-dom";

import TMDBLogo from '../../images/TMDBLogo.svg'
import {Wrapper, TMBDLogoImg, Content} from "./Header.styles";
import Favorite from "../Favorite";
import Login from "../Login/Login";
import {Context} from "../../contextLogin/loginContext";

const Header = () => {
    const [user] = useContext(Context)
    console.log(user)

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <TMBDLogoImg src={TMDBLogo} alt="tmdb-logo" />
                </Link>
                <div>
                    <Favorite />
                </div>
                <div>
                    {user ? (
                        <span style={{color: '#47C0C5'}}>Logged in as: {user.username}</span>
                    ): <Login />}
                </div>
            </Content>

        </Wrapper>
    )
}

export default Header