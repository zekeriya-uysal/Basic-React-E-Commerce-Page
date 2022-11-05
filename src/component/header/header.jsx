import React from "react";

import HeaderTooltips from "./header-cart";

import "../../assets/styles/header.scss";

function Header(props) {
    const { state } = props;
    return (
        <div className="header">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="header-logo">
                    </div>
                    <HeaderTooltips state={state} />
                </div>
            </div>
        </div >
    );
}
export default Header;