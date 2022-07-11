import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Styles + Icons
import { Container, Navbar as Nb, Nav, NavDropdown, Button } from "react-bootstrap";

// Import Components + Images
import ImageProfile from "./subComponents/ImageProfile";
import { authActions } from "../redux/slice/auth";

export default function Navbar() {
	const [isLogin, setIslogin] = useState(false);
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) setIslogin(true);
	}, []);

	function logout() {
		dispatch(authActions.logout());
	}

	return (
		<Nb collapseOnSelect expand="lg" fixed="top" className="bg-glass py-4">
			<Container>
				<Nb.Toggle aria-controls="responsive-navbar-nav" />
				<Nav className="d-flex flex-row align-items-center order-lg-2">
					{!isLogin && (
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
				{isLogin && (
					<NavDropdown
						title={<ImageProfile urlPhoto={user.photo_profile} />}
						align="end"
						className="order-lg-2 py-1"
					>
						<Link className="dropdown-item" to="/profile">
							Profile
						</Link>
						<Link className="dropdown-item" to="/profile">
							My Recipes
						</Link>
						<NavDropdown.Divider />
						<Link className="dropdown-item" to="/login" onClick={logout}>
							Log Out
						</Link>
					</NavDropdown>
				)}
				<Nb.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto pt-4 ps-4 p-lg-0 gap-3 gap-lg-5">
						<li className="active-nav">
							<Link to="/" className="text-dark fw-bold">
								Home
							</Link>
						</li>
						{isLogin && (
							<>
								<li className="">
									<Link to="/add" className="text-dark fw-bold">
										Add Recipe
									</Link>
								</li>
								<li className="">
									<Link to="/profile" className="text-dark fw-bold">
										Profile
									</Link>
								</li>
							</>
						)}
					</Nav>
				</Nb.Collapse>
			</Container>
		</Nb>
	);
}
