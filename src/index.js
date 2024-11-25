import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from react-dom/client
import App from "./App";
import "./index.css"; // Ensure this file exists or remove it if unnecessary

// Ensure there's a root element with id 'root' in your HTML
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found.");
}
