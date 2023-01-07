import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import ProductCard from "../components/ProductCard";

const Home = () => {
	let [rand, setRand] = useState([]);
	const { products } = useGlobalContext();

	useEffect(() => {
		(() => {
			products?.length && getRand();
			function getRand() {
				let arr = [];
				for (let i = 0; i < 20; i++) {
					generateDistinctRandomFunc(arr);
				}
				setRand(arr);
			}

			function generateDistinctRandomFunc(arr) {
				let rand = Math.floor(Math.random() * products.length);
				if (arr.includes(rand)) {
					return generateDistinctRandomFunc(arr);
				}
				return arr.push(rand);
			}
		})();
	}, [products]);

	// Generate Random Products

	return (
		<>
			<article className="info">
				<h3>Some selected products</h3>
			</article>
			<section className="products__container">
				{rand.map((e, index) => {
					return <ProductCard key={index} {...products[e]} />;
				})}
			</section>
		</>
	);
};

export default Home;
