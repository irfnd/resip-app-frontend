import { PropTypes } from "prop-types";
import { Image } from "react-bootstrap";

import userPlaceholder from "../../images/user-placeholder.jpg";

export default function ImageProfile(props) {
	const { urlPhoto } = props;
	return (
		<Image
			roundedCircle
			src={urlPhoto ? `http://localhost:8000${urlPhoto}` : userPlaceholder}
			width={35}
			className="border border-success"
		/>
	);
}

ImageProfile.propTypes = {
	urlPhoto: PropTypes.string,
};

ImageProfile.defaultProps = {
	urlPhoto: null,
};
