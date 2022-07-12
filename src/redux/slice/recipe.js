import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const recipeEntity = createEntityAdapter({
	selectId: (recipe) => recipe.id,
});

const extraActions = {
	getRecipes: createAsyncThunk("recipe/getRecipes", async ({ page, size }) => {
		const res = await axios.get(`${REACT_APP_API_URL}/recipes`, { params: { page, size } });
		return res.data.results.recipes;
	}),
	addRecipe: createAsyncThunk("recipe/addRecipe", async ({ formData, token }) => {
		const res = await axios.post(`${REACT_APP_API_URL}/recipes`, formData, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data.results;
	}),
	getMyRecipes: createAsyncThunk("recipe/getMyRecipes", async ({ token }) => {
		const res = await axios.get(`${REACT_APP_API_URL}/my-recipes`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data.results.recipes;
	}),
};

const extraReducers = () => {
	const { getRecipes, addRecipe, getMyRecipes } = extraActions;
	return {
		[getRecipes.fulfilled]: (state, action) => {
			recipeEntity.setAll(state, action.payload);
		},
		[getMyRecipes.fulfilled]: (state, action) => {
			recipeEntity.setAll(state, action.payload);
		},
		[addRecipe.fulfilled]: (state, action) => {
			recipeEntity.setAll(state, action.payload);
		},
	};
};

const recipeSlice = createSlice({
	name: "recipe",
	initialState: recipeEntity.getInitialState(),
	extraReducers: extraReducers(),
});

export const recipeActions = { ...recipeSlice.actions, ...extraActions };
export const recipeSelector = recipeEntity.getSelectors((state) => state.recipe);
export const recipeReducer = recipeSlice.reducer;
