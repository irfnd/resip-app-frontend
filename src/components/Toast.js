import { useState } from "react";
import { Toast } from "react-bootstrap";

export default function AutohideExample() {
	const [show, setShow] = useState(false);

	return (
		<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
			<Toast.Header>
				<strong className="me-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Woohoo, Toast!</Toast.Body>
		</Toast>
	);
}
