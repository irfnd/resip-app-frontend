import { PropTypes } from "prop-types";

export default function TitlePage(props) {
	const { title, desc } = props;
	return (
		<>
			<h4 className="text-primary fw-bold mb-4">{title}</h4>
			<span className="text-secondary">{desc}</span>
			<hr className="mt-4" />
		</>
	);
}

TitlePage.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
};

TitlePage.defaultProps = {
	title: "This is title",
	desc: "This is description",
};
