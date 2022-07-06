import { Link } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";

import Input from "./subComponents/input/Input";
import ButtonBlock from "./subComponents/button/ButtonBlock";
import CheckRadio from "./subComponents/checkRadio/CheckRadio";

export default function LoginForm() {
	return (
		<div className="w-100 h-100 d-flex justify-content-center align-items-center px-3 px-md-0 px-lg-5">
			<Col xs={12} sm={10} md={8} className="bg-light rounded-4 p-5 p-md-0">
				<Row>
					<Col className="text-center">
						<h4 className="text-primary fw-bold mb-4">Welcome</h4>
						<span className="text-secondary">Log in into your exiting account</span>
						<hr className="mt-4" />
					</Col>
				</Row>
				<Form>
					<Row>
						<Col>
							<Input id="input-email" name="email" type="email" label="E-mail" placeholder="Enter your E-mail" />
							<Input
								id="input-password"
								name="password"
								type="password"
								label="Password"
								placeholder="Enter your Password"
							/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col>
							<CheckRadio
								id="agree-terms"
								name="agree-terms"
								type="checkbox"
								label="I agree to terms & conditions"
							/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col>
							<ButtonBlock variant="primary" type="submit" className="text-light" text="Log in" />
						</Col>
					</Row>
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
