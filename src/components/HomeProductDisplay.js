import { React, useState} from "react";
import ProductListing from "../components/common/ProductListing";
import SearchProducts from "./common/SearchProducts";
const HomeProductDisplay = (props) => {
  const [Products, setProducts] = useState(props.Products);
  const getfilteredProducts=(fitlteredProducts)=>{
    setProducts(fitlteredProducts)
  }
  return (
    <>
      <div className="product-type">
        <div className="container">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="brance1"
              role="tabpanel"
              aria-labelledby="brance1-tab"
            >
              <div className="product-info">
                <div className="pi-head">
                  <div className="row no-gutters align-items-center justify-content-between">
                    <h2>What is Lorem Ipsum?</h2>
                    <SearchProducts products={Products} filteredProducts={getfilteredProducts}/>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className="product-list">
                        <ProductListing Products={Products} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeProductDisplay;
