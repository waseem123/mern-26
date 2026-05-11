import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { ThemeContext } from "../context/ThemeContext";

export default function ProductsPage({ currentTheme }) {
    let products = [
        {
            "id": 101,
            "title": "Wireless Mouse",
            "price": 29.99,
            "cartCount": 0
        },
        {
            "id": 102,
            "title": "Mechanical Keyboard",
            "price": 89.50,
            "cartCount": 0
        },
        {
            "id": 103,
            "title": "HD Monitor",
            "price": 150.00,
            "cartCount": 0
        },
        {
            "id": 104,
            "title": "USB-C Cable",
            "price": 12.99,
            "cartCount": 0
        }
    ]
    const [globalCount, setGlobalCount] = useState(0)
    const updateGlobalCount = (data) => {
        setGlobalCount(globalCount + data)
    }

    const [theme, setCurrentTheme] = useState(currentTheme);
    const updateTheme = () => {
        setCurrentTheme((theme === "light") ? "dark" : "light")
    }
    
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-12">
                    <h3 className="float-end">Cart - {globalCount}</h3>
                    <button onClick={updateTheme}>Change Theme</button>
                </div>
                <ThemeContext.Provider value={theme}>
                    <div className="col-3">
                        <ProductsCard product={products[0]} updateGlobalCount={updateGlobalCount} />
                    </div>
                    <div className="col-3">
                        <ProductsCard product={products[1]} updateGlobalCount={updateGlobalCount} />
                    </div>
                    <div className="col-3">
                        <ProductsCard product={products[2]} updateGlobalCount={updateGlobalCount} />
                    </div>
                    <div className="col-3">
                        <ProductsCard product={products[3]} updateGlobalCount={updateGlobalCount} />
                    </div>
                </ThemeContext.Provider>
            </div>
        </div>
    );
}