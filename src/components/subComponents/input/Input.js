import { PropTypes } from "prop-types";
import { Form } from "react-bootstrap";

export default function Input(props) {
	const { id, name, label, type, placeholder, register, errors } = props;
	return (
		<Form.Group className="mb-3" controlId={id} name={name}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} {...register(name)} isInvalid={!!errors[name]} />
			<Form.Control.Feedback type="invalid">{errors[name] && errors[name].message}</Form.Control.Feedback>
		</Form.Group>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	register: PropTypes.func,
	errors: PropTypes.object,
};

Input.defaultProps = {
	id: "my-input",
	name: "my-input",
	label: "My Input",
	type: "text",
	placeholder: "My Input",
	register: null,
	errors: null,
};
