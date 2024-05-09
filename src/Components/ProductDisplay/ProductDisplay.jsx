import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
    // Ensure that product is defined
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.image_urls.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    {product.image_urls.length > 0 && (
                        <img
                            className="productdisplay-main-img"
                            src={product.image_urls[0]}
                            alt="Main image"
                        />
                    )}
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-rigt-description">
                    {/* Your product description */}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Sigiliu</h1>
                    <div className="producrdisplay-right-sizes">
                        <div>Culoare</div>
                        <div>Culoare</div>
                        <div>Culoare</div>
                        <div>Culoare</div>
                    </div>
                </div>
                <button onClick={() => { /* Handle contact button click */ }}>Contact us</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
