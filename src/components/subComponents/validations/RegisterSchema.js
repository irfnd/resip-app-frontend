import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const RegisterSchema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	"phone-number": yup.string().required(),
	password: yup.string().password().required(),
	"confirm-password": yup
		.string()
		.required()
		.oneOf([yup.ref("password"), null], "Passwords must match"),
	"agree-terms": yup.bool().required().oneOf([true], "Terms must be accepted"),
});

export default RegisterSchema;
