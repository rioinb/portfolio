import * as React from "react"

import { css } from "@emotion/react"

import PropTypes from "prop-types"

import HeaderLinkItem from "./headerListItem"
import { useState } from "react"

function Header() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <header css={headerMobileStyle}>
                <div css={headerMobileInnerStyle}>
                    <div css={mobileMenuButtonStyle}>
                        {
                            open ?
                                <div css={closeButtonStyle} onClick={toggle}>
                                    <span></span><span></span><span></span>
                                </div>
                                :
                                <div css={openButtonStyle} onClick={toggle}>
                                    <span></span><span></span><span></span>
                                </div>
                        }
                    </div>
                </div>
                <div>
                    {
                        open ?
                            <div css={mobileMenuOpenStyle}>
                                <HeaderLinkItem title="Home" link="" />
                                <HeaderLinkItem title="About" link="about" />
                            </div>
                            :
                            <div css={mobileMenuClosedStyle}>
                            </div>
                    }
                </div>
            </header>
            <header css={headerScreenStyle}>
                <div css={headerScreenInnerStyle}>
                    <ul css={headerScreenListStyle}>
                        <HeaderLinkItem title="Home" link="" />
                        <HeaderLinkItem title="About" link="about" />
                    </ul>
                </div>
            </header>
        </>
    )
}

//Mobile Header Styles
const headerMobileStyle = css`
    display: none;
    @media (max-width: 850px) {
        width: 100%;
        z-index: 1000;

        position: fixed;
        display: block;
    }
`

const headerMobileInnerStyle = css`
    background-color: rgb(211,208,199);
`

//
const mobileMenuButtonStyle = css`
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-left: auto;
    border-radius: 5px;
    overflow: hidden;
`

const openButtonStyle = css`
    transition: all .6s;
    width: 50px;
    height: 50px;
    span {
        display: inline-block;
        transition: all .4s;
        position: absolute;
        left: 14px;
        height: 3px;
        border-radius: 2px;
        background: #fff;
        width: 45%;
        :nth-of-type(1) {
            top: 15px;
        }
        :nth-of-type(2) {
            top: 23px;
        }
        :nth-of-type(3) {
            top: 31px;
        }
    }
`

const closeButtonStyle = css`
    ${openButtonStyle}
    transform: rotate(360deg);
    span{
        :nth-of-type(1) {
            top: 18px;
            left: 18px;
            transform: translateY(6px) rotate(-45deg);
            width: 30%;
        }
        :nth-of-type(2) {
            opacity: 0;
        }
        :nth-of-type(3){
            top: 30px;
            left: 18px;
            transform: translateY(-6px) rotate(45deg);
            width: 30%;
        }
    }
`

const mobileMenuClosedStyle = css`
    height: 100vh;
    width: 100%;
    background-color: rgb(211,208,199, 0.9);

    animation-name:fadeOutAnime;
	animation-duration: 1s;
	animation-fill-mode:forwards;


    @keyframes fadeOutAnime{
        from {
            opacity: 1;
        }

        to {
            opacity:0;
        }
    }
`

const mobileMenuOpenStyle = css`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: rgb(211,208,199, 0.9);

    animation-name:fadeInAnime;
	animation-duration: 1s;
	animation-fill-mode:forwards;


    @keyframes fadeInAnime{
        from {
            opacity: 0;
        }

        to {
            opacity:1;
        }
    }
`
//Screen Header Styles
const headerScreenStyle = css`
    position: fixed;
    width: 100%;
    background-color: rgb(211,208,199);
    z-index: 1000;
    @media (max-width: 850px) {
        display: none;
    }
`

const headerScreenInnerStyle = css`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`

const headerScreenListStyle = css`
    margin: 0 auto;
    max-width: 90%;
    padding: unset;
    display: flex;
    justify-content: start;
    list-style-type: none;
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
