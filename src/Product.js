import React from 'react';
import "./Product.css"

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}원</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>★</p>
                            ))

                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button>장바구니에 담기</button>
        </div>
    );
}

export default Product;