import { Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
	return (
		<Row className="bg-primary mt-5 py-5 d-flex justify-content-center align-items-center w-100 m-0">
			<Col md={12} className="text-center my-5">
				<p className="display-4 fw-medium mb-4 text-light">Eat, Cook, Repeat</p>
				<p className="ts-20 text-light">Share your best recipe by uploading here !</p>
			</Col>
			<Col md={12} className="mt-5">
				<Nav className="justify-content-center bg-primary w-100">
					<Nav.Item>
						<Nav.Link href="/home" className="text-light">
							Product
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home" className="text-light">
							Company
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home" className="text-light">
							Learn More
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home" className="text-light">
							Get in Touch
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Col>
		</Row>
	);
}
