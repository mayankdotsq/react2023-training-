import { React, useState, useEffect } from "react";
import ProductListing from "../components/common/ProductListing";
const HomeProductDisplay = (props) => {
  const [Products, setProducts] = useState(props.Products);
  const [search, setSearch] = useState("");
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
                    <div className="search-field">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Search by Lorem ipsum..."
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button
                        type="button"
                        name="search"
                        onClick={(e) => {
                          let filteredProds = Products.filter((product) => {
                            return product.title
                              .toLowerCase()
                              .includes(search.toLowerCase());
                          });
                          setProducts(filteredProds);
                        }}
                      >
                        <i className="fas fa-search" />
                      </button>
                      &nbsp;
                      <button className="btn"  onClick={(e) => {
                        setProducts(props.Products);
                        setSearch("");
                        }}>
                        View all
                      </button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className="product-list">
                        <ProductListing Products={Products} />
                        <a href="#" className="btn-custom">
                          View all
                        </a>
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
