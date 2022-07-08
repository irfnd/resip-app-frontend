import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import img1 from "../images/homepage-img-1.jpg";
import img2 from "../images/new-recipe-1.jpg";

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
			<Navbar collapseOnSelect expand="lg" fixed="top" className="bg-glass py-2">
				<Container className={!login ? "py-3" : "py-2"}>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<li className="ms-0 p-0 px-5 ps-0 active-nav" active>
								<Link to="/" className="text-dark fw-bold">
									Home
								</Link>
							</li>
							<li className="p-0 px-5" active={false}>
								<Link to="/" className="text-dark fw-bold">
									Add Recipe
								</Link>
							</li>
							<li className="me-0 p-0 px-5 pe-0" active={false}>
								<Link to="/" className="text-dark fw-bold">
									Profile
								</Link>
							</li>
						</Nav>
						<Nav className="d-flex align-items-center">
							{!login ? (
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
							) : (
								<NavDropdown title={<ImageProfile />} align="end" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">My Recipes</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div className="bg-primary background-accent-1"> </div>

			<Container>
				{/* Section 1 - Search Bar */}
				<Row className="vh-100 pt-5">
					<Col md={6} className="d-flex flex-column justify-content-center">
						<Row>
							<Col md={10}>
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
					<Col md={6} className="d-flex justify-content-end align-items-center">
						<Image src={img1} width="500" alt="..." rounded />
					</Col>
				</Row>
			</Container>

			<div className="bg-primary background-accent-2"> </div>
			<Container>
				<Row className="vh-100 pt-5">
					<Col md={6} className="d-flex flex-column justify-content-evenly">
						<p className="ts-30 fw-medium tag">New Recipe</p>
						<Image src={img2} width="500" alt="..." rounded />
					</Col>
					<Col md={6} className="d-flex flex-column justify-content-center align-items-end">
						<Row className="d-flex flex-column justify-content-center align-items-end">
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
			</Container>
		</>
	);
}
