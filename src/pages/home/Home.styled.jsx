import styled from "styled-components";

export const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 94% 6%;
	background-color: ${(props) => props.theme.background};
  position: relative;
`;
