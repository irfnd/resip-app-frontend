import { useState } from "react";
import { Toast } from "react-bootstrap";

function AutohideExample() {
	const [show, setShow] = useState(false);

	return (
		<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Woohoo, Toast!</Toast.Body>
		</Toast>
	);
}

export default AutohideExample;
