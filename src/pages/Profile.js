import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { recipeActions, recipeSelector } from "../redux/slice/recipe";

// Import Style + Icon
import { Container, Row, Col, Figure, Button, Tabs, Tab } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";

// Import Components + Image
import Navbar from "../components/Navbar";
import userPlaceholder from "../images/user-placeholder.jpg";
import recipePlaceholder from "../images/recipe-placeholder.png";

export default function Profile() {
	const dispatch = useDispatch();
	const recipes = useSelector(recipeSelector.selectAll);
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {
		dispatch(recipeActions.getMyRecipes({ page: 1, size: 8 }));
	}, [dispatch]);

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
											{recipes.map(({ id, title, photo_recipe }) => (
												<Col className="mb-4" key={id}>
													<Figure
														className="recipe-photo rounded-2 m-0"
														style={{
															backgroundImage: `url(${
																photo_recipe ? `http://localhost:8000${photo_recipe}` : recipePlaceholder
															})`,
														}}
													>
														<div className="recipe-title">
															<Link to={`/recipe/${id}`}>
																<h5 className="ms-3 mb-3 fw-bold w-75 text-dark">{title}</h5>
															</Link>
														</div>
													</Figure>
												</Col>
											))}
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
