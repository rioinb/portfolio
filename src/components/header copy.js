import * as React from "react"

import { css } from "@emotion/react"

import PropTypes from "prop-types"

import HeaderLinkItem from "./headerListItem"
import { useState } from "react"


function Header() {
    const [open, toggle] = useState(false);
    return (
        <>
            <header css={headerMobile}>
                <div css={openbtn}><div id='mobile-header-button' css={openbtnArea} onClick={toggleDesign, toggle(!open)}><span></span><span></span><span></span></div></div>
            </header>
            <header css={header}>
                <div css={headerInnerStyle}>
                    <ul css={headerListStyle}>
                        <HeaderLinkItem title="Home" link="" />
                        <HeaderLinkItem title="About" link="about" />
                    </ul>
                </div>
            </header>
        </>
    )
    console.log(open);
}


const toggleDesign = () => {
    document.getElementById('mobile-header-button').classList.toggle('active');
};

const header = css`
    position: fixed;
    width: 100%;
    background-color: rgb(211,208,199);
    z-index: 1000;
    @media (max-width: 850px) {
        display: none;
        background-color: red;
    }
`

const headerMobile = css`
    display: none;
    width: 100%;
    background-color: rgb(211,208,199);
    z-index: 1000;
    @media (max-width: 850px) {
        position: fixed;
        display: block;
        background-color: red;
    }
`

//
const openbtn = css`
    position: relative;/*ボタン内側の基点となるためrelativeを指定*/
    background: #EC6015;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
`

/*ボタン内側*/
const openbtnArea = css`
    transition: all .6s;/*アニメーションの設定*/
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
    .active{
        background-color: blue;
    }
`
const active = css`
    div.active{
    transform: rotate(360deg);
        span :nth-of-type(1) {
        top: 18px;
        left: 18px;
            transform: translateY(6px) rotate(-45deg);
            width: 30%;
        }
        span :nth-of-type(2) {
        opacity: 0;
        }
        span :nth-of-type(3){
            top: 30px;
            left: 18px;
            transform: translateY(-6px) rotate(45deg);
            width: 30%;
        }
    }
`

const headerInnerStyle = css`
    margin: unset;
    position: relative;
    @media (max-width: 850px) {
        background-color: red;
    }
`

const headerListStyle = css`
    margin: 0 auto;
    max-width: 90%;
    padding: unset;
    display: flex;
    justify-content: start;
    list-style-type: none;
    @media (max-width: 850px) {
        display: none;
    }
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
