import React from "react";

const ProductCard = ({ product }) => {
    // Define handlePayment function
    const handlePayment = async () => {
        try {
            // Make API request to backend payment route
            const response = await fetch("http://localhost:5000/api/payments/pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: product.price, 
                    phoneNumber: "123456789"
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Payment successful!");
            } else {
                alert("Payment failed: " + data.message); // Improved error message
            }
        } catch (error) {
            console.error("Error during payment:", error);
            alert("Payment failed: " + error.message); // Improved error handling
        }
    };

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default ProductCard;
