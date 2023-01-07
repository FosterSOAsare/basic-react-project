import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Category = () => {
	let { category } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		category &&
			(async () => {
				let data = await axios.get(`https://dummyjson.com/products/category/${category}`);
				setProducts(data?.data?.products);
			})();
	}, [category]);
	return (
		<>
			<article className="info"></article>
			<div className="products__container">
				{products.map((e, index) => {
					return <ProductCard key={index} {...e} />;
				})}
			</div>
		</>
	);
};

export default Category;
