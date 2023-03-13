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
                    <Product/>
                </div>

                <div className="home_row">
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