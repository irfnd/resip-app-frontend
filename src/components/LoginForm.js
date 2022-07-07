import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Row, Col, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";

import TitlePage from "./subComponents/title/TitlePage";
import Input from "./subComponents/input/Input";
import ButtonBlock from "./subComponents/button/ButtonBlock";
import CheckRadio from "./subComponents/checkRadio/CheckRadio";
import LoginSchema from "./subComponents/validations/LoginSchema";

const loginProps = {
	title: {
		titlePage: {
			title: "Welcome",
			desc: "Log in into your exiting account",
		},
	},
	input: {
		inputEmail: {
			id: "input-email",
			name: "email",
			type: "email",
			label: "E-mail",
			placeholder: "Enter your E-mail",
		},
		inputPassword: {
			id: "input-password",
			name: "password",
			type: "password",
			label: "Password",
			placeholder: "Enter your Password",
		},
		checkAgreeTerms: {
			id: "agree-terms",
			name: "agree-terms",
			type: "checkbox",
			label: "I agree to terms & conditions",
		},
		submitButton: {
			variant: "primary",
			type: "submit",
			className: "text-light",
			text: "Log in",
		},
	},
};

export default function LoginForm() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(LoginSchema),
	});
	const { errors } = formState;

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="w-100 h-100 d-flex justify-content-center align-items-center px-3 px-md-0 px-lg-5">
			<Col xs={12} sm={10} md={8} className="bg-light rounded-4 p-5 p-md-0">
				{/* Page Title */}
				<Row>
					<Col className="text-center">
						<TitlePage {...loginProps.title.titlePage} />
					</Col>
				</Row>

				{/* Login Form */}
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Row>
						<Col>
							<Input {...loginProps.input.inputEmail} register={register} errors={errors} />
							<Input {...loginProps.input.inputPassword} register={register} errors={errors} />
						</Col>
					</Row>
					<Row className="mb-3">
						<Col>
							<CheckRadio {...loginProps.input.checkAgreeTerms} register={register} errors={errors} />
						</Col>
					</Row>
					<Row className="mb-3">
						<Col>
							<ButtonBlock {...loginProps.input.submitButton} />
						</Col>
					</Row>

					{/* Sign-Up for new user */}
					<Row>
						<Col className="text-center">
							<p className="ts-12 fw-medium">
								Don’t have an account? <Link to="/register">Sign Up</Link>
							</p>
						</Col>
					</Row>
				</Form>
			</Col>
		</div>
	);
}
