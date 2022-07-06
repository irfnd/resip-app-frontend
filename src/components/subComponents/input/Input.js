import { PropTypes } from "prop-types";
import { Form } from "react-bootstrap";

export default function Input(props) {
	const { id, name, label, type, placeholder } = props;
	return (
		<Form.Group className="mb-3" controlId={id} name={name}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} />
		</Form.Group>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

Input.defaultProps = {
	id: "my-input",
	name: "my-input",
	label: "My Input",
	type: "text",
	placeholder: "My Input",
};
