import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/slice/auth";

// Import Components
import TitlePage from "./subComponents/title/TitlePage";
import Input from "./subComponents/input/Input";
import ButtonBlock from "./subComponents/button/ButtonBlock";
import CheckRadio from "./subComponents/checkRadio/CheckRadio";
import RegisterSchema from "./subComponents/validations/RegisterSchema";

const registerProps = {
	title: {
		titlePage: {
			title: "Let’s Get Started !",
			desc: "Create new account to access all features",
		},
	},
	input: {
		inputName: {
			id: "input-name",
			name: "name",
			type: "text",
			label: "Name",
			placeholder: "Enter your Name",
		},
		inputEmail: {
			id: "input-email",
			name: "email",
			type: "email",
			label: "Email address*",
			placeholder: "Enter your Email address",
		},
		inputPhoneNumber: {
			id: "input-phone-number",
			name: "phone_number",
			type: "text",
			label: "Phone Number*",
			placeholder: "Enter your Phone Number",
		},
		inputPassword: {
			id: "input-password",
			name: "password",
			type: "password",
			label: "Create New Password",
			placeholder: "Create New Password",
		},
		inputConfirmPassword: {
			id: "input-confirm-password",
			name: "confirm_password",
			type: "password",
			label: "Confirm Password",
			placeholder: "Confirm Password",
		},
		checkAgreeTerms: {
			id: "agree-terms",
			name: "agree_terms",
			type: "checkbox",
			label: "I agree to terms & conditions",
		},
		submitButton: {
			variant: "primary",
			type: "submit",
			className: "text-light",
			text: "Register Account",
		},
	},
};

export default function RegisterForm() {
	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);
	const registerError = useSelector((state) => state.auth.error);

	useEffect(() => {
		if (user) navigate("/");
	}, []);

	const onSubmit = ({ name, email, phone_number, password }) => {
		return dispatch(authActions.register({ name, email, phone_number, password }));
	};

	return (
		<Col md={6} className="p-4">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row className="bg-light justify-content-center py-5 px-5 px-sm-0 px-md-3 rounded-4">
					<Col sm={8} md={12} lg={10} xl={8} className="m-0 p-0">
						{/* Title Page */}
						<div className="text-center">
							<TitlePage {...registerProps.title.titlePage} />
						</div>

						{/* Input Register */}
						<div>
							<Input {...registerProps.input.inputName} register={register} errors={errors} />
							<Input {...registerProps.input.inputEmail} register={register} errors={errors} />
							<Input {...registerProps.input.inputPhoneNumber} register={register} errors={errors} />
							<Input {...registerProps.input.inputPassword} register={register} errors={errors} />
							<Input {...registerProps.input.inputConfirmPassword} register={register} errors={errors} />
						</div>
						<div className="mb-3">
							<CheckRadio {...registerProps.input.checkAgreeTerms} register={register} errors={errors} />
						</div>
						<div className="mb-3">
							<ButtonBlock {...registerProps.input.submitButton} />
						</div>

						{/* Sign-Up for new user */}
						<div className="text-center">
							<p className="ts-12 fw-medium">
								Already have account? <Link to="/login">Log in Here</Link>
							</p>
							{registerError && <p>{registerError.errors}</p>}
						</div>
					</Col>
				</Row>
			</Form>
		</Col>
	);
}
