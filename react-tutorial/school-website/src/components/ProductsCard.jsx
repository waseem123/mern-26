import { useState } from "react";

export default function ProductsCard({ product,updateGlobalCount }) {
    const [localCount, updateCount] = useState(product.cartCount)
    const increaseCount = () => {
        if (localCount < 10) {
            updateCount(localCount + 1)
            product.cartCount++
            updateGlobalCount(1)
        }
    }

    const decreaseCount = () => {
        if (localCount > 0) {
            updateCount(localCount - 1)
            product.cartCount--
            updateGlobalCount(-1)
        }
    }
    return (
        <div className="card shadow-lg">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5>{product.title}</h5>
                <span>$ {product.price}</span>
                <span className="float-end">
                    <button onClick={decreaseCount} className="btn btn-sm btn-primary">-</button>
                    <span className="mx-2">{localCount}</span>
                    <button onClick={increaseCount} className="btn btn-sm btn-primary">+</button>
                </span>
            </div>
        </div>
    );
}