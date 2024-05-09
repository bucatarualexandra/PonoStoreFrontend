import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
            .then((response) => response.json())
            .then((data) => setAllProducts(data));
    }, []);

    const contextValue = { allProducts };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;