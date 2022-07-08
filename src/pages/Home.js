import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import img1 from "../images/homepage-img-1.jpg";
import img2 from "../images/new-recipe-1.jpg";

import recipe1 from "../images/recipes/recipe-1.jpg";

function ImageProfile() {
	return (
		<Image
			roundedCircle
			src="https://garverins.com/wp-content/uploads/user.png"
			width={35}
			className="border border-success"
		/>
	);
}

export default function Home() {
	const [login] = useState(false);

	return (
		<>
			{/* Navbar */}
			<Navbar collapseOnSelect expand="lg" fixed="top" className="bg-glass py-4">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Nav className="d-flex flex-row align-items-center order-lg-2">
						{!login && (
							<>
								<li className="me-2 fw-bold">
									<Link to="/login">
										<Button variant="primary" className="text-light p-2 px-4">
											Log In
										</Button>
									</Link>
								</li>
								<li>
									<Link to="/register">
										<Button variant="warning" className="p-2 px-4">
											Sign Up
										</Button>
									</Link>
								</li>
							</>
						)}
					</Nav>
					{login && (
						<NavDropdown title={<ImageProfile />} align="end" className="order-lg-2 py-1">
							<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">My Recipes</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
						</NavDropdown>
					)}
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto pt-4 ps-4 p-lg-0 gap-3 gap-lg-5">
							<li className="active-nav" active>
								<Link to="/" className="text-dark fw-bold">
									Home
								</Link>
							</li>
							<li className="" active={false}>
								<Link to="/" className="text-dark fw-bold">
									Add Recipe
								</Link>
							</li>
							<li className="" active={false}>
								<Link to="/" className="text-dark fw-bold">
									Profile
								</Link>
							</li>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

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
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
							<Col className="my-3">
								<Image src={recipe1} fluid alt="..." rounded />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

			{/* Footer */}
			<Row className="bg-primary mt-5 py-5 d-flex justify-content-center align-items-center w-100 m-0">
				<Col md={12} className="text-center my-5">
					<p className="display-3 fw-medium mb-4 text-light">Eat, Cook, Repeat</p>
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
		</>
	);
}
