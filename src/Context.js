import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			let data = await axios("https://dummyjson.com/products?limit=70");
			setProducts(data?.data?.products);
		})();
	}, []);

	return <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
	return useContext(AppContext);
}
export default AppProvider;
