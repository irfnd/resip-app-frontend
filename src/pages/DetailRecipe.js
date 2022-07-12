import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { recipeSelector } from "../redux/slice/recipe";
import { Container, Row, Col, ListGroup, Button, Form, Image } from "react-bootstrap";
import { FiPlay, FiBookmark, FiThumbsUp } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import recipePlaceholder from "../images/recipe-placeholder.png";

export default function DetailRecipe() {
	const { recipeId } = useParams();
	const recipe = useSelector((state) => recipeSelector.selectById(state, recipeId));

	return (
		<>
			<Navbar />

			<Container>
				<Row className="d-flex flex-column pt-5">
					{/* Recipe Title */}
					<Col className="mt-5 py-5">
						<p className="ts-28 text-center fw-medium mt-5">{recipe.title}</p>
					</Col>

					{/* Recipe Photo */}
					<Col className="mb-5">
						<Row className="d-flex justify-content-center">
							<Col
								lg={8}
								className="d-flex justify-content-end align-items-end recipe-detail-photo rounded p-3"
								style={{
									backgroundImage: `url(${
										recipe.photo_recipe ? `http://localhost:8000${recipe.photo_recipe}` : recipePlaceholder
									})`,
								}}
							>
								<div className="d-flex gap-2">
									<Button size="sm" className="p-2 rounded-3 text-light">
										<FiBookmark size={20} />
									</Button>
									<Button size="sm" className="p-2 rounded-3 text-light" variant="warning">
										<FiThumbsUp size={20} />
									</Button>
								</div>
							</Col>
						</Row>
					</Col>

					{/* Recipe Ingredients */}
					<Col className="mb-5">
						<Row className="d-flex justify-content-center">
							<Col lg={8}>
								<p className="fs-4 fw-medium">Description</p>
								<p className="text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra viverra nisi quis blandit.
									Nullam luctus, arcu eget blandit lacinia, quam ipsum bibendum lacus, et bibendum metus nibh quis
									purus. Phasellus id mi in metus scelerisque porttitor id ut augue. Maecenas dapibus auctor lacus,
									ac dignissim urna ultricies id. Vestibulum vulputate suscipit orci, nec sagittis lectus rutrum
									quis. Etiam eget ante nec diam vehicula consectetur. Mauris consequat rhoncus ligula in commodo.
									Aliquam vitae suscipit libero. Phasellus sapien sem, maximus vitae pellentesque a, tristique sit
									amet odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.
									Donec nec erat id diam vehicula pharetra. Donec leo li
								</p>
							</Col>
						</Row>
					</Col>

					{/* Recipe Ingredients */}
					<Col className="mb-5">
						<Row className="d-flex justify-content-center">
							<Col lg={8}>
								<p className="fs-4 fw-medium">Ingredients</p>
								<ListGroup variant="flush">
									{recipe.ingredients.map((el) => (
										<ListGroup.Item>{el}</ListGroup.Item>
									))}
								</ListGroup>
							</Col>
						</Row>
					</Col>

					{/* Recipe Video Step */}
					<Col className="mb-5">
						<Row className="d-flex justify-content-center">
							<Col lg={8}>
								<p className="fs-4 fw-medium">Video Step</p>
								<ListGroup variant="flush">
									<ListGroup.Item className="d-flex justify-content-between align-items-center">
										<Button size="sm text-light px-5">
											<FiPlay size={16} />
										</Button>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex justify-content-between align-items-center">
										<Button size="sm text-light px-5">
											<FiPlay size={16} />
										</Button>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex justify-content-between align-items-center">
										<Button size="sm text-light px-5">
											<FiPlay size={16} />
										</Button>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex justify-content-between align-items-center">
										<Button size="sm text-light px-5">
											<FiPlay size={16} />
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Col>

					{/* Comment Form */}
					<Col className="my-5">
						<Row className="d-flex justify-content-center">
							<Col lg={8}>
								<Form>
									<Form.Control as="textarea" rows={12} placeholder="Comment :" className="mb-4" />
									<div className="w-100 d-flex justify-content-end">
										<Button type="submit" className="px-5 text-light">
											Send
										</Button>
									</div>
								</Form>
							</Col>
						</Row>
					</Col>

					{/* Comment List */}
					<Col className="mb-5">
						<Row className="d-flex justify-content-center">
							<Col lg={8}>
								<p className="fs-4 fw-medium">Comment</p>
								<Row className="mb-3">
									<Col className="col-auto">
										<Image src="https://garverins.com/wp-content/uploads/user.png" height={50} roundedCircle />
									</Col>
									<Col>
										<span className="fw-medium">Ayudia</span>
										<p>Nice recipe. simple and delicious, thankyou</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	);
}
