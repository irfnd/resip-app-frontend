import { Container, Figure, Button, Image, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import img1 from "../images/homepage-img-1.jpg";
import img2 from "../images/new-recipe-1.jpg";

import recipe1 from "../images/recipes/recipe-1.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
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
								<div className="bg-primary background-accent-1"> </div>
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
								<div className="bg-primary background-accent-2"> </div>
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
					</Col>
				</Row>
			</Container>

			{/* Footer */}
			<Footer />
		</>
	);
}
