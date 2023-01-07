import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Category from "./Pages/Category";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />}></Route>
				<Route path="categories">
					<Route index element={<Categories />}></Route>
					<Route path=":category" element={<Category />}></Route>
				</Route>
				<Route path="products">
					<Route index element={<Products />}></Route>
					<Route path=":id" element={<Product />}></Route>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
}

export default App;
