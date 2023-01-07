import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		(async () => {
			let data = await axios.get("https://dummyjson.com/products/categories");
			setCategories(data?.data);
		})();
	}, []);
	return (
		<>
			<article className="info">Product Categories</article>
			<div className="product__categories">
				{categories.map((e, index) => {
					return (
						<Link key={index} data-name={e} className="category" to={`/categories/${e}`}>
							{e}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Categories;
