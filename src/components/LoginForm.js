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
		<Col md={6} className="">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row className="vh-100 d-flex justify-content-center align-items-center m-0 ">
					<Col xs={12} sm={8} md={12} lg={10} xl={8} className="bg-light m-0 py-5 px-5 px-md-3 rounded-4">
						{/* Title Page */}
						<div className="text-center">
							<TitlePage {...loginProps.title.titlePage} />
						</div>

						{/* Input Login */}
						<div>
							<Input {...loginProps.input.inputEmail} register={register} errors={errors} />
							<Input {...loginProps.input.inputPassword} register={register} errors={errors} />
						</div>
						<div className="mb-3">
							<CheckRadio {...loginProps.input.checkAgreeTerms} register={register} errors={errors} />
						</div>
						<div className="mb-3">
							<ButtonBlock {...loginProps.input.submitButton} />
						</div>

						{/* Sign-Up for new user */}
						<div className="text-center">
							<p className="ts-12 fw-medium">
								Don’t have an account? <Link to="/register">Sign Up</Link>
							</p>
						</div>
					</Col>
				</Row>
			</Form>
		</Col>
	);
}
