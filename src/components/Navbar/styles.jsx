import styled, { css } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import backgroundMenu from '../../assets/backgroud-menu/fundo-menu.jpg';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${backgroundMenu});
  background-size: cover;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    align-items: center;

    @media ${theme.media.lteSmall} {
      grid-template-rows: repeat(6, 60px);
    }
  `}
`;

export const SidebarLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.secondary};
      transition: all ease-in-out 300ms;
      text-decoration: none;
    }
  `}
`;
