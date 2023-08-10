import React, { useState } from 'react'

function SearchProducts(props) {
    const [products, setProducts] = useState(props.products);
    const [search, setSearch] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);
    const handleSearch = () => {
        setSearchClicked(true);
        let filteredProds = products.filter((product) => {
            return product.title
                .toLowerCase()
                .includes(search.toLowerCase());
        });
        if (filteredProds) {
            props.filteredProducts(filteredProds);
        }
    }
    const handleReset = () => {
        console.log(products);
        props.filteredProducts(products);
        setSearch("")
        setSearchClicked(false);

    }
    return (
        <div className="search-field">
            <input
                type="text"
                name="search-text"
                className="form-control"
                placeholder="Search by Lorem ipsum..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {!searchClicked && <button
                type="button"
                name="search-btn"
                onClick={(e) => {
                    handleSearch()
                }}
            >
                <i className="fa fa-search" />
            </button>}
            {searchClicked &&
                <button
                    type="button"
                    name="reset-search-btn"
                    onClick={(e) => {
                        handleReset()
                    }}
                >
                    <i className="fa fa-refresh" />
                </button>
            }
        </div>
    )
}

export default SearchProducts