import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			let data = id && (await axios.get(`https://dummyjson.com/products/${id}`));
			setData(data.data);
			setLoading(false);
		})();
	}, [id]);
	return (
		<>
			{!loading && (
				<>
					<article className="info">Product {data.id}</article>
					<section className="product__info">
						<div className="images">
							{data &&
								data.images.map((e, index) => {
									return (
										<div className="image" key={index}>
											<img src={e} alt="data.title" />
										</div>
									);
								})}
						</div>
						<div className="content">
							<h3>{data.title}</h3>
							<p className="ratings">Rating : {data.rating}</p>
							<p className="price">
								Price : {data.price} <span>{data.discountPercentage}% off</span>
							</p>
							<p className="category">Category : {data.category}</p>
							<div className="brand">{data.brand}</div>
							<p className="desc">{data.description}</p>
							<p className="stock">In Stock : {data.stock}</p>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default Product;
