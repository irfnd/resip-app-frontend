import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { recipeActions, recipeSelector } from "../redux/slice/recipe";

import { Container, Figure, Button, Image, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import img1 from "../images/homepage-img-1.jpg";
import img2 from "../images/new-recipe-1.jpg";
import recipePlaceholder from "../images/recipe-placeholder.png";

export default function Home() {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => recipeSelector.selectAll(state));

	useEffect(() => {
		dispatch(recipeActions.getRecipes({ page: 1, size: 8 }));
	}, [dispatch]);

	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* Homepage Content */}
			<Container>
				<Row className="d-flex flex-column">
					{/* Section 1 - Search Bar */}
					<Col className="mt-5 py-5">
						<Row className="py-5">
							<Col xs={12} md={6} className="mb-5 m-md-0">
								<Row className="h-100 d-flex align-items-center">
									<Col md={10} className="text-center text-md-start">
										<p className="display-3 fw-medium">Discover Recipe & Delicious Food</p>
										<div className="input-group mb-3">
											<span className="input-group-text bg-primary border-primary">
												<FiSearch size={20} className="text-light" />
											</span>
											<input type="text" className="form-control" placeholder="Search food recipe" />
										</div>
									</Col>
								</Row>
							</Col>
							<Col xs={12} md={6}>
								<Row className="h-100 d-flex align-items-center justify-content-end">
									<Col lg={10}>
										<Image src={img1} fluid alt="..." rounded />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>

					{/* Section 2 - New Recipe */}
					<Col>
						<Row className="py-5">
							<Col xs={12} md={6} className="mb-5 m-md-0">
								<Row className="h-100 d-flex align-items-center">
									<Col lg={10}>
										<p className="ts-30 fw-medium tag mb-5">New Recipe</p>
										<Image src={img2} fluid alt="..." rounded />
									</Col>
								</Row>
							</Col>
							<Col xs={12} md={6}>
								<Row className="h-100 d-flex align-items-center justify-content-end">
									<Col md={10}>
										<p className="display-6 fw-medium">Healthy Bone Broth Ramen (Quick & Easy)</p>
										<hr />
										<p className="ts-20">
											Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
										</p>
										<Button variant="warning" className="p-3 px-4">
											Learn More
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>

					{/* Section 3 - Latest Recipe */}
					<Col>
						<Row className="py-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
							<Col sm={12} md={12} lg={12}>
								<p className="ts-30 fw-medium tag mb-5">Latest Recipe</p>
							</Col>
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
					</Col>
				</Row>
			</Container>

			{/* Footer */}
			<Footer />
		</>
	);
}
