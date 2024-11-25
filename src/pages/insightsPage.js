import React, { useState, useEffect } from "react";

const InsightsPage = () => {
    const [insights, setInsights] = useState([]);

    useEffect(() => {
        // Fetch insights from backend
        fetch("http://localhost:5000/api/insights")
            .then((response) => response.json())
            .then((data) => setInsights(data))
            .catch((error) => console.error("Error fetching insights:", error));
    }, []);

    return (
        <div>
            <h1>Agricultural Insights</h1>
            {insights.length > 0 ? (
                <div>
                    {insights.map((insight) => (
                        <div key={insight._id}>
                            <h2>{insight.title}</h2>
                            <p>{insight.content}</p>
                            <small>Published on {new Date(insight.publishedAt).toLocaleDateString()}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No insights available at the moment.</p>
            )}
        </div>
    );
};

export default InsightsPage;
