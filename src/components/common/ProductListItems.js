import React from "react";

function ProductListItems({ id, thumbnail, title }) {
  return (
    <>
      <li key={id}>
        <a href="#">
          <span className="product-thumb">
            <img src={thumbnail} alt="img" />
          </span>
          <span className="product-title">{title}</span>
        </a>
      </li>
    </>
  );
}

export default ProductListItems;
