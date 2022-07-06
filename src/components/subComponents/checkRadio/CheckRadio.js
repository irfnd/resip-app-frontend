import { PropTypes } from "prop-types";
import { Form } from "react-bootstrap";

export default function CheckRadio(props) {
	const { id, name, type, className, label, isDisabled } = props;
	return <Form.Check id={id} name={name} type={type} className={className} label={label} disabled={isDisabled} />;
}

CheckRadio.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
};

CheckRadio.defaultProps = {
	id: "my-checkRadio",
	name: "my-checkRadio",
	type: "checkbox",
	className: "fw-medium",
	label: "My CheckRadio",
	isDisabled: false,
};
