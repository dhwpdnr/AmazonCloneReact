import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo_image"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">ㅇㅇㅇㅇ</span>
                    <span className="header_optionLineTwo">ㄷㄷㄷㄷ</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwoheader_basketCount">
                        0
                    </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;