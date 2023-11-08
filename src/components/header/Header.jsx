import React from 'react'
import { AuthButton, AuthButtonsContainer, LinkContainer, LogoContainer, LogoLinksContainer, StyledHeader, StyledLink } from './Header.styled'
import {FaPinterest} from "react-icons/fa"
import { Text } from '../../utils/Text.styled';

const Header = () => {
  return (
		<StyledHeader>
			<LogoLinksContainer>
				<LogoContainer>
					<FaPinterest size={33} color="#E60022" />
					<Text
						as="h1"
						colorType="pinterestColor"
						size="large"
						className="logo"
					>
						Pinterest
					</Text>
				</LogoContainer>
				<LinkContainer>
					<StyledLink className='linksButton'>
						Today
					</StyledLink>
					<StyledLink className='linksButton'>
						Watch
					</StyledLink>
					<StyledLink className='linksButton'>
						Explore
					</StyledLink>
				</LinkContainer>
			</LogoLinksContainer>
			<LinkContainer>
				<StyledLink as="a" href="/">
					About
				</StyledLink>
				<StyledLink as="a" href="/">
					Business
				</StyledLink>
				<StyledLink as="a" href="/">
					Blog
				</StyledLink>
				<AuthButtonsContainer>
					<AuthButton type="highlight">Log in</AuthButton>
					<AuthButton colorType="signUpTextColor">Sign up</AuthButton>
				</AuthButtonsContainer>
			</LinkContainer>
		</StyledHeader>
	);
}

export default Header