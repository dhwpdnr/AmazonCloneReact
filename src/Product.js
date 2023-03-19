import React from 'react';
import "./Product.css"
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }

    console.log("장바구니 확인 ", basket);


    const ar = Array(rating)
    console.log("배열은 " + ar.fill("d"))

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
                            .map((_, i) => (
                                <p>★</p>
                            ))

                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>장바구니에 담기</button>
        </div>
    );
}

export default Product;