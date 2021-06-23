import React from "react";
import {Link} from "react-router-dom";

import TMDBLogo from '../../images/TMDBLogo.svg'
import {Wrapper, TMBDLogoImg, Content} from "./Header.styles";
import Favorite from "../Favorite";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <TMBDLogoImg src={TMDBLogo} alt="tmdb-logo" />
            </Link>
            <div>
                <Favorite />
            </div>
        </Content>

    </Wrapper>
)

export default Header