import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 80px;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between icon and text */
  text-decoration: none;
`;

const HeartIcon = styled(FaHeart)`
  color: #e74c3c; /* Red heart color */
  font-size: 2rem; /* Adjust icon size */
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    margin-top: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <LogoLink to="/">
        <HeartIcon />
        <LogoText>Love Abnormal</LogoText>
      </LogoLink>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
      </NavLinks>
    </NavContainer>
  );
}
