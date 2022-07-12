import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import history from "./helpers/history";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
	history.navigate = useNavigate();
	history.location = useLocation();

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
					<Route
						path="/add"
						element={
							<PrivateRoute>
								<AddRecipe />
							</PrivateRoute>
						}
					/>
					<Route path="/recipe/:recipeId" element={<DetailRecipe />} />

					{/* Profile Pages */}
					<Route
						path="/profile"
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>

					{/* Not-found Page */}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}
