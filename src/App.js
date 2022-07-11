import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/">
					{/* Home page */}
					<Route index element={<Home />} />

					{/* Auth Pages */}
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* Recipes Pages */}
					<Route path="/add" element={<AddRecipe />} />
					<Route path="/recipe/:recipeId" element={<DetailRecipe />} />

					{/* Profile Pages */}
					<Route path="/profile" element={<Profile />} />

					{/* Not-found Page */}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}
