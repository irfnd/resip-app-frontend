import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const LoginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().password().required(),
	"agree-terms": yup.bool().required().oneOf([true], "Terms must be accepted"),
});

export default LoginSchema;
