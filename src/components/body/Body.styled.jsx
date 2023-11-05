import styled, { keyframes } from "styled-components";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { motion } from "framer-motion";

export const StyledBody = styled.div`
	/* background-color: red; */
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;

export const DotsContainer = styled.div`
	margin-top: 2.2rem;
  display: flex;
  gap: 0.8rem;
  margin-top: 7rem;
`;

export const AnimatedHeading = styled(motion.div)`
	position: absolute;
  top: 42%;
`;

export const Dot = styled.div.attrs(({ bgColor }) => ({
	bgColor: bgColor || "#e1e1e1",
}))`
	height: 0.6rem;
	width: 0.6rem;
	border-radius: 1000rem;
  background-color: ${({ bgColor }) => bgColor};

	&:hover {
		cursor: pointer;
	}
`;



export const HeadingsContainer = styled.div`
	display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  gap: .4rem;
  justify-content: center;
  align-items: center;
`;

const bounce = keyframes`
  0%{
    transform: translate(-50%, 0);
  }
  50%{
    transform: translate(-50%, -2rem);
  }
  100%{
    transform: translate(-50%, 0rem);
  }
`

export const StyledAnimatedIcon = styled(TiWeatherPartlySunny)`
	background-color: ${(props) => props.bgColor || "black"};
	color: "white";
	border-radius: 100rem;
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translateX(-50%);
	animation: ${bounce} 2s ease-in-out infinite;

	&:hover {
		cursor: pointer;
	}
`;