import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { allProducts } = useContext(ShopContext);
    const { productId } = useParams();
    
    // Check if allProducts is not undefined before using find
    const product = allProducts && allProducts.find((product) => product.id === Number(productId));

    // Check if product is not undefined before rendering
    return (
        <div>
            {product ? (
                <>
                    <ProductDisplay product={product} />
                    <RelatedProducts />
                </>
            ) : (
                <div>Loading...</div> // or any other error handling logic
            )}
        </div>
    );
};

export default Product;
