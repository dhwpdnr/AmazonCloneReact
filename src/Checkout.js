import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://storage.googleapis.com/website-production/uploads/2023/01/new-yorker-banner-ad-.png"
                     alt=""/>

                <div>
                    <h2 className="checkout_title">장바구니입니다</h2>
                </div>
                {/* 아이템 */}
                {/* 아이템 */}
                {/* 아이템 */}
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>


        </div>
    );
}

export default Checkout;