import { Link } from "react-router-dom"

const About = () => {
	return(
	<>
		<h1>Sobre o Projeto.</h1>
		<p>Bem vindo a guia Sobre</p>
		<Link to="/">Ir para Home</Link>
		</>
	);
};

export { About }
