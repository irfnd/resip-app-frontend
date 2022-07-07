import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../images/logo1024.png";
import LoginForm from "../components/LoginForm";

export default function Login() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				const ismobile = window.innerWidth < 768;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false
		);
	}, [isMobile]);

	return (
		<Container fluid className="vh-100 p-0">
			<Row className={`vh-100 m-0 ${isMobile ? "background-form" : ""}`}>
				<Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-0 background-form">
					<Row>
						<Col className="text-center">
							<img src={Logo} alt="logo" width="128" className="img-fluid" />
							<p className="font-logo fw-bolder text-light">Resip!</p>
						</Col>
					</Row>
				</Col>
				<LoginForm />
			</Row>
		</Container>
	);
}
