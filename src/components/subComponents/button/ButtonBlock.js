import { PropTypes } from "prop-types";
import { Button } from "react-bootstrap";

export default function ButtonBlock(props) {
	const { variant, type, className, text, isDisabled } = props;
	return (
		<div className="d-grid gap-2">
			<Button variant={variant} type={type} className={className} disabled={isDisabled}>
				{text}
			</Button>
		</div>
	);
}

ButtonBlock.propTypes = {
	variant: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	text: PropTypes.string,
	isDisabled: PropTypes.bool,
};

ButtonBlock.defaultProps = {
	variant: "primary",
	type: null,
	className: "text-light",
	text: "My Button",
	isDisabled: false,
};
