import React, { useState, useMemo } from 'react'
import Footer from './Footer.jsx'
import './ShopMore.css'

// Same product data as NewSelection — in a real app this would live in one shared file.
// I'll show you how to share it below.
const products = [
  { id: 1, name: 'Amara Lounge Chair', price: 429, category: 'Living Room', image: 'https://i.pinimg.com/736x/5d/7c/1e/5d7c1ede065cfb9c97705e6196214a7f.jpg' },
  { id: 2, name: 'Solstice Coffee Table', price: 289, category: 'Living Room', image: 'https://i.pinimg.com/1200x/ed/51/62/ed5162c5cd08ebeef97564efcbb6e94b.jpg' },
  { id: 3, name: 'Wovenlight Sofa', price: 1249, category: 'Living Room', image: 'https://i.pinimg.com/1200x/93/43/7f/93437f2d7925d096eb3ac987343ab500.jpg' },
  { id: 4, name: 'Hollow Oak Bed Frame', price: 899, category: 'Bedroom', image: 'https://i.pinimg.com/1200x/0e/31/a9/0e31a9606e8af089df6ab55bde7fc47d.jpg' },
  { id: 5, name: 'Linen Fold Nightstand', price: 219, category: 'Bedroom', image: 'https://i.pinimg.com/1200x/18/eb/ba/18ebba1e7d7b0f2a62dec360ee1942ce.jpg' },
  { id: 6, name: 'Cloudrest Pillow Set', price: 79, category: 'Bedroom', image: 'https://i.pinimg.com/1200x/f0/97/35/f097351d173a477564a74c26855f1a49.jpg' },
  { id: 7, name: 'Marbleworks Island Stool', price: 159, category: 'Kitchen', image: 'https://i.pinimg.com/736x/17/c9/e3/17c9e39604f81ec38e0311013e59b2da.jpg' },
  { id: 8, name: 'Copperline Pot Rack', price: 189, category: 'Kitchen', image: 'https://i.pinimg.com/736x/21/f5/6b/21f56b393cf1d75dc088f4401e571959.jpg' },
  { id: 9, name: 'Harvest Oak Dining Table', price: 999, category: 'Dining', image: 'https://i.pinimg.com/1200x/34/fe/d9/34fed998886cc13eb56b404f5d3d6e5a.jpg' },
  { id: 10, name: 'Rowan Dining Chair', price: 149, category: 'Dining', image: 'https://i.pinimg.com/736x/59/5a/e6/595ae66567b48dfb6669594050be3707.jpg' },
  { id: 11, name: 'Terra Ceramic Vase', price: 59, category: 'Decor', image: 'https://i.pinimg.com/736x/f4/91/4f/f4914fd99dc67763b3e82749e3cae7af.jpg' },
  { id: 12, name: 'Moonfold Wall Mirror', price: 249, category: 'Decor', image: 'https://i.pinimg.com/736x/e7/59/33/e75933135d7ab993cf7b1db15fae5de9.jp=g' },
]

function ShopMore() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [maxPrice, setMaxPrice] = useState(1300)

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price <= maxPrice
    )

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sortBy === 'name-asc') result = [...result].sort((a, b) => a.name.localeCompare(b.name))

    return result
  }, [search, sortBy, maxPrice])

  return (
    <>
      <section className="shopmore-page">
        <div className="shopmore-header">
          <p className="hero-eyebrow">Full catalog</p>
          <h1 className="shopmore-heading">Shop everything</h1>
          <p className="shopmore-subtext">
            Search, filter, and sort our entire collection.
          </p>
        </div>

        <div className="shopmore-controls">
          <input
            type="text"
            placeholder="Search products..."
            className="shopmore-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="shopmore-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>

          <label className="shopmore-price-filter">
            Max price: ${maxPrice}
            <input
              type="range"
              min="50"
              max="1300"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="shopmore-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="shopmore-empty">No products match your search.</p>
        )}
      </section>

      <Footer />
    </>
  )
}

export default ShopMore