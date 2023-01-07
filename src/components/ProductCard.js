import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, brand, price, discountPercentage, images, rating }) => {
	return (
		<article className="product__card">
			<Link className="card__link" to={`/products/${id}`}>
				<div className="image">
					<img src={images[0]} alt="" />
				</div>
				<div className="content">
					<h3>{title}</h3>
					<p className="ratings">Ratings : {rating}</p>
					<p className="price">
						Price : {price} <span>{discountPercentage}% off</span>
					</p>
					<p>Brand : {brand}</p>
				</div>
			</Link>
		</article>
	);
};

export default ProductCard;
