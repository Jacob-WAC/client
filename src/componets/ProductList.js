import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const ProductList = (props) => {
    const history = useHistory();
    return (
        <div>
            {props.products.map((product, i) => (
                <p key={i}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </p>
            ))}
        </div>
    );
};
export default ProductList;
