import { PropTypes } from "prop-types";
import { Image } from "react-bootstrap";

export default function ImageProfile(props) {
	const { urlPhoto } = props;
	return <Image roundedCircle src={urlPhoto} width={35} className="border border-success" />;
}

ImageProfile.propTypes = {
	urlPhoto: PropTypes.string,
};

ImageProfile.defaultProps = {
	urlPhoto: null,
};
