import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";

import history from "../helpers/history";

export default function PrivateRoute({ children }) {
	const { user: authUser } = useSelector((state) => state.auth);

	if (!authUser) {
		return <Navigate to="/login" state={{ from: history.location }} />;
	}

	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.element.isRequired,
};
