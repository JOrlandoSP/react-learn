import { Link } from "react-router-dom"

const Home = () => {
	return(
	<>
		<h1>Home Sweet Home!.</h1>
		<p>Estas é a nossa Home</p>
		<Link to="/Login">Faça Login aqui!</Link>
		<Link to="/About">Sobre</Link>
	</>
	);
};

export { Home }
