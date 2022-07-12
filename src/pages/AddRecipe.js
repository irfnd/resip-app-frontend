import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { recipeActions } from "../redux/slice/recipe";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddRecipeSchema from "../components/subComponents/validations/AddRecipeSchema";

export default function AddRecipe() {
	const formOptions = { resolver: yupResolver(AddRecipeSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.user.token.access_token);

	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append("photo_recipe", data.photo_recipe[0]);
		formData.append("title", data.title);
		formData.append("ingredients", data.ingredients);
		formData.append("steps", data.steps);

		await dispatch(recipeActions.addRecipe({ formData, token }));
		navigate("/");
	};

	return (
		<>
			<Navbar />

			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Row className="d-flex flex-column">
						<Col className="mt-5 pt-5">
							<Row className="d-flex justify-content-center mt-5 mb-4 pt-5">
								<Col lg={8}>
									<Form.Control
										type="file"
										name="photo_recipe"
										placeholder="Photo Recipe"
										{...register("photo_recipe")}
										isInvalid={!!errors.photo_recipe}
									/>
									<Form.Control.Feedback type="invalid">{errors.photo_recipe?.message}</Form.Control.Feedback>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control
										type="text"
										name="title"
										placeholder="Title"
										{...register("title")}
										isInvalid={!!errors.title}
									/>
									<Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control as="textarea" name="description" rows={5} placeholder="Descriptions" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control
										as="textarea"
										name="ingredients"
										rows={12}
										placeholder="Ingredients"
										{...register("ingredients")}
									/>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control as="textarea" name="steps" rows={12} placeholder="Steps" {...register("steps")} />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control type="file" placeholder="Video Recipe" />
								</Col>
							</Row>
							<Row className="mb-5 d-flex justify-content-center">
								<Col lg={8} className="d-flex justify-content-end">
									<Button type="submit" className="text-light px-5">
										Post
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Form>
			</Container>

			<Footer />
		</>
	);
}
