import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddRecipe() {
	return (
		<>
			<Navbar />

			<Container>
				<Form>
					<Row className="d-flex flex-column">
						<Col className="mt-5 pt-5">
							<Row className="d-flex justify-content-center mt-5 mb-4 pt-5">
								<Col lg={8}>
									<Form.Control type="file" placeholder="Photo Recipe" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control type="email" placeholder="Title" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control as="textarea" rows={5} placeholder="Descriptions" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center mb-4">
								<Col lg={8}>
									<Form.Control as="textarea" rows={12} placeholder="Ingredients" />
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
