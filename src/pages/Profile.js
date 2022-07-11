import { useSelector } from "react-redux";

// Import Style + Icon
import { Container, Row, Col, Figure, Button, Tabs, Tab } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";

// Import Components + Image
import Navbar from "../components/Navbar";
import recipe1 from "../images/recipes/recipe-1.jpg";
import userPlaceholder from "../images/user-placeholder.jpg";

export default function Profile() {
	const user = useSelector((state) => state.auth.user);

	return (
		<>
			<Navbar />

			<Container>
				<Row className="d-flex flex-column">
					<Col className="mt-5 mb-5 pt-5">
						<Row className="d-flex flex-column align-items-center mt-5 pt-5">
							<Col xs={4} sm={3} md={2} lg={2} xl={2} className="mb-3">
								<Figure className="profile-photo m-0">
									<Figure.Image
										className="m-0"
										src={user.photo_profile ? `http://localhost:8000${user.photo_profile}` : userPlaceholder}
										alt={`Profile ${user.name}`}
										fluid
										roundedCircle
									/>
									<div className="profile-edit">
										<Button className="p-0" variant="link">
											<FiEdit3 size={20} />
										</Button>
									</div>
								</Figure>
							</Col>
							<Col className="text-center">
								<h4 className="m-0">{user.name}</h4>
							</Col>
						</Row>
					</Col>

					<Col>
						<Row>
							<Col>
								<Tabs defaultActiveKey="myrecipe" id="uncontrolled-tab-example" className="mb-3">
									<Tab eventKey="myrecipe" title="My Recipe">
										<Row className="py-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
											<Col className="mb-4">
												<Figure className="recipe-photo m-0">
													<Figure.Image className="m-0" src={recipe1} alt="..." rounded fluid />
													<div className="recipe-title">
														<h5 className="ms-3 mb-3 fw-medium w-50">Bomb Chicken</h5>
													</div>
												</Figure>
											</Col>
											<Col className="mb-4">
												<Figure className="recipe-photo m-0">
													<Figure.Image className="m-0" src={recipe1} alt="..." rounded fluid />
													<div className="recipe-title">
														<h5 className="ms-3 mb-3 fw-medium w-50">Bomb Chicken</h5>
													</div>
												</Figure>
											</Col>
											<Col className="mb-4">
												<Figure className="recipe-photo m-0">
													<Figure.Image className="m-0" src={recipe1} alt="..." rounded fluid />
													<div className="recipe-title">
														<h5 className="ms-3 mb-3 fw-medium w-50">Bomb Chicken</h5>
													</div>
												</Figure>
											</Col>
										</Row>
									</Tab>
									<Tab eventKey="savedrecipe" title="Saved Recipe">
										<p>Lorem ipsum</p>
									</Tab>
									<Tab eventKey="likedrecipe" title="Liked Recipe">
										<p>Lorem ipsum</p>
									</Tab>
								</Tabs>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
