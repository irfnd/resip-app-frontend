import * as yup from "yup";

const AddRecipeSchema = yup.object().shape({
	photo_recipe: yup
		.mixed()
		.test("type", "We only support jpeg, jpg, and png", (value) => {
			const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
			return value && value[0] && SUPPORTED_FORMATS.includes(value[0].type);
		})
		.test("fileSize", "The file is too large", (value) => {
			return value && value[0] && value[0].size <= 5242880;
		}),
	title: yup.string().max(60).required(),
	ingredients: yup.string(),
	steps: yup.string(),
});

export default AddRecipeSchema;
