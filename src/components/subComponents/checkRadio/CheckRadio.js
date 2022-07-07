import { PropTypes } from "prop-types";
import { Form } from "react-bootstrap";

export default function CheckRadio(props) {
	const { id, name, type, className, label, isDisabled, register, errors } = props;
	return (
		<Form.Check
			id={id}
			name={name}
			type={type}
			className={className}
			label={label}
			disabled={isDisabled}
			{...register(name)}
			isInvalid={!!errors[name]}
			feedback={errors[name] && errors[name].message}
			feedbackType="invalid"
		/>
	);
}

CheckRadio.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
	register: PropTypes.func,
	errors: PropTypes.object,
};

CheckRadio.defaultProps = {
	id: "my-checkRadio",
	name: "my-checkRadio",
	type: "checkbox",
	className: "fw-medium",
	label: "My CheckRadio",
	isDisabled: false,
	register: null,
	errors: null,
};
