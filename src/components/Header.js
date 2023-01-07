import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
	return (
		<>
			<header>
				<div className="logo">FOSTER</div>
				<nav>
					<NavLink to="/" className="nav__element">
						Home
					</NavLink>
					<NavLink to="/products" className="nav__element">
						Products
					</NavLink>
					<NavLink to="/categories" className="nav__element">
						Categories
					</NavLink>
				</nav>
			</header>
			<Outlet></Outlet>
		</>
	);
}

export default Header;
