import axios from "axios";
import { useEffect, useState } from "react";
import './bad.css';

function Bad() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response && response.data) {
      setProducts(response.data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="comp-bad">
    <div className="product-items">
      <div className="product-items__item">
        <a href="/" className="product-items__item-link">
          <img src="" alt="" className="image" />
        </a>
        <div className="product-items__item-rating">
          <svg
            aria-hidden="true"
            className=""
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span></span>
        </div>
        <div className="product-items__item-payment">
          <span className="payment-price"></span>
          <a href="/" className="payment-button">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Bad;
