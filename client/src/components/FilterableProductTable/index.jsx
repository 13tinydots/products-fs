import { gql, useQuery } from "@apollo/client";
import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const GET_PRODUCTS = gql`
  query Query {
    products {
      _id
      category
      price
      stocked
      name
    }
  }
`;

function handleToggle(e) {
  console.log("toggle", e.target.checked);
}

function handleSearch(e) {
  e.preventDefault();
  const query = e.target.value;
  console.log(query);
}

function FilterableProductTable() {
  const { loading, data } = useQuery(GET_PRODUCTS);
  return (
    <div className="flex flex-col justify-center gap-3">
      <SearchBar checkboxHandler={handleToggle} inputHandler={handleSearch} />
      {data ? <ProductTable products={data.products} /> : <p>⏳</p>}
    </div>
  );
}

export default FilterableProductTable;
