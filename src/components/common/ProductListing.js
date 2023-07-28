import React from 'react'
import ProductListItems from './ProductListItems';
function ProductListing(props) {
    const Products = props.Products;
    return (
        <ul>
          {Products.length > 0 &&
            Products.map((product) => {
              return (
                <ProductListItems key={product.id} {...product} />
              );
            })}
        </ul>
      );
}

export default ProductListing