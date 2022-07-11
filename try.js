const axios = require("axios");

const data = {
	email: "admin@email.com",
	password: "Password123.",
};

axios
	.post("http://localhost:3001/auth/login", data)
	.then((res) => console.log(res))
	.catch((err) => console.log(err.message));
