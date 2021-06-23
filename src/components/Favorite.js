import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Favorite = () => {
    return (
        <>
            <Wrapper>
                <Link to='/favorite'>
                    Favorite Movies
                </Link>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`

  a {
    color: #47C0C5;
    font-size: var(--fontBig);
    text-transform: uppercase;
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontMed);
    }
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`

export default Favorite