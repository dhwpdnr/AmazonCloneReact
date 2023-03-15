import React from 'react';
import Product from "./Product"
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                     src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>

                <div className="home_row">
                    <Product id="2323" title="제품 1 입니다" price={3000}
                             image="https:/en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="home_row">
                    <Product/>
                </div>

                <div className="home_row">
                    <Product/>
                </div>
            </div>
        </div>
    );
}

export default Home;