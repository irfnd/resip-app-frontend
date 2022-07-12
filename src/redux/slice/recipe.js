import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
const { API_URL } = process.env;

const recipeEntity = createEntityAdapter({
	selectId: (recipe) => recipe.id,
});

const extraActions = {
	getRecipes: createAsyncThunk("recipe/getRecipes", async ({ page, size }) => {
		const res = await axios.get(`${API_URL}/recipes`, { params: { page, size } });
		return res.data.results.recipes;
	}),
	addRecipe: createAsyncThunk("recipe/addRecipe", async ({ formData, token }) => {
		const res = await axios.post(`${API_URL}/recipes`, formData, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data.results;
	}),

	getMyRecipes: createAsyncThunk("recipe/getMyRecipes", async ({ token }) => {
		const res = await axios.get(`${API_URL}/my-recipes`, {
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
		[addRecipe.fulfilled]: (state, action) => {
			recipeEntity.addOne(state, action.payload);
		},
		[getMyRecipes.fulfilled]: (state, action) => {
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