import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const [products, setProducts] = useState([]); // State to store product data
    const [error, setError] = useState(null); // State to handle fetch errors

    // Fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error.message);
        }
    };

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Welcome to the Ethiopian Agricultural Marketplace</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>No products available. Please check back later!</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
