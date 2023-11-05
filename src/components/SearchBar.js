import React, { useEffect, useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {
  const [searchString, setSearchString] = useState("")
  const handleChange = (event) => {
    setSearchString(event.target.value)
  }

  const [filterProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    function fetchAPIData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
          const filtered = products.filter((product) => {
            return product.title.toLowerCase().includes(searchString.toLowerCase())
          })
          const currentFilter = filtered.map((product, index) => {
            return (
              <div className="prodStyle" key={index}>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <img style={{width: "100px"}} src={product.image} alt={product.title} />
              </div>
            )
          })
          setFilteredProducts(currentFilter)
        })
    }
    
    fetchAPIData()
  }, [searchString])

  return (
    <div>
      <input type="text" value={searchString} onChange={handleChange} />
      <div style={{display: "flex", flexFlow: "row wrap"}}>{filterProducts}</div>
    </div>
  )
}

export default SearchBar
