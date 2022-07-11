import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../../helpers/history";

const createInitialState = () => {
	return {
		user: JSON.parse(localStorage.getItem("user")),
		status: null,
		error: null,
	};
};

const extraActions = {
	register: createAsyncThunk("auth/register", async (data) => {
		const res = await axios.post("http://localhost:8000/auth/register", data);
		return res.data.results;
	}),
	login: createAsyncThunk("auth/login", async (data) => {
		const res = await axios.post("http://localhost:8000/auth/login", data);
		return res.data.results;
	}),
};

const extraReducerLogin = () => {
	const { pending, fulfilled, rejected } = extraActions.login;
	return {
		[pending]: (state) => {
			state.status = "Loading";
			state.error = null;
		},
		[fulfilled]: (state, action) => {
			const user = action.payload;
			state.status = "Success";
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));

			const { from } = history.location.state || { from: { pathname: "/" } };
			history.navigate(from);
		},
		[rejected]: (state, action) => {
			state.status = "Failed";
			state.error = action.error;
		},
	};
};

const extraReducerRegister = () => {
	const { pending, fulfilled, rejected } = extraActions.register;
	return {
		[pending]: (state) => {
			state.status = "Loading";
			state.error = null;
		},
		[fulfilled]: (state) => {
			state.status = "Success";
			state.error = null;
		},
		[rejected]: (state, action) => {
			state.status = "Failed";
			state.error = action.error;
		},
	};
};

const authSlice = createSlice({
	name: "auth",
	initialState: createInitialState(),
	reducers: {
		logout: (state) => {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
	extraReducers: { ...extraReducerLogin(), ...extraReducerRegister() },
});

export const authActions = { ...authSlice.actions, ...extraActions };
export const authReducer = authSlice.reducer;
