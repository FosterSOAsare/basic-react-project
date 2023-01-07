import React from "react";
import { useGlobalContext } from "../Context";
import ProductCard from "../components/ProductCard";

const Products = () => {
	const { products } = useGlobalContext();
	return (
		<>
			<article className="info">
				<h3>List of products</h3>
			</article>
			<section className="products__container">
				{products &&
					products.map((e, index) => {
						return <ProductCard key={index} {...e} />;
					})}
			</section>
		</>
	);
};

export default Products;
