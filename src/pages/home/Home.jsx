import React from "react";
import { StyledHome } from "./Home.styled";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";

const Home = ({ toggleTheme }) => {
	return (
		<StyledHome>
			<div>
				<Header />
				<Body toggleTheme={toggleTheme} />
			</div>
			<Footer />
		</StyledHome>
	);
};

export default Home;
