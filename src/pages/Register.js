import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../images/logo1024.png";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
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
		<Container fluid className="vh-md-100 p-0">
			<Row className={`vh-md-100 m-0 ${isMobile ? "login" : ""}`}>
				<Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-0 login">
					<Row>
						<Col className="text-center">
							<img src={Logo} alt="logo" width="128" className="img-fluid" />
							<p className="font-logo fw-bolder text-light">Resip!</p>
						</Col>
					</Row>
				</Col>
				<RegisterForm />
			</Row>
		</Container>
	);
}
