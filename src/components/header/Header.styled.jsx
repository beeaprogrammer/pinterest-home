import styled, { css } from "styled-components";
import { Text } from "../../utils/Text.styled";

export const StyledHeader = styled.div`
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.4rem 1rem 0 1.8rem;
  position: absolute;
  top: 0;
  z-index: 2;
`

export const LogoContainer = styled.div`
	display: flex;
  align-items: center;
  gap: .2rem;
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
  /* gap: rem; */
`;

export const LogoLinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const StyledLink = styled(Text)`
	margin-right: 1.5rem;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&.linksButton {
		padding: 0.5rem;
		text-decoration: none;
		cursor: pointer;

		&:hover {
			background-color: #efefef;
			border-radius: 0.5rem;
		}
	}
`;

export const AuthButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const AuthButton = styled(Text)`
	background-color: #efefef;
	padding: 0.7rem;
	border-radius: 100rem;

	${({ type }) =>
		type === "highlight" &&
		css`
			background-color: #e60022;
			color: white;
		`}

	&:hover {
		cursor: pointer;;
	}
`;


