import { Link } from "react-router-dom"

const Login = () => {
	return(
	<>
		<h1>Area de Login.</h1>
		<p>Faça login para continuar!</p>
		<Link to="/">Ir para Home</Link>
		</>
	);
};

export { Login }
