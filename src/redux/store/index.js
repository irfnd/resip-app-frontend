import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "../slice/auth";
import { recipeReducer } from "../slice/recipe";

const store = configureStore({
	reducer: {
		auth: authReducer,
		recipe: recipeReducer,
	},
});

export default store;
