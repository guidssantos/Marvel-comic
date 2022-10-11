import styled, { css } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const HeaderBackground = styled.header`
  background-color: black;
`;

export const HeaderContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    height: 80px;

    @media ${theme.media.lteMedium} {
      justify-content: center;
    }
  `}
`;

export const LogoWrapper = styled.ul`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    img {
      width: 150px;
    }
  `}
`;

export const MobileIcon = styled.li`
  ${({ theme }) => css`
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 15px;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
      color: ${theme.colors.white};
    }
  `}
`;

export const HeaderMenu = styled.ul`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;

    a {
      margin-right: ${theme.spacings.medium};
      font-size: 16px;
      transition: all ease-in-out 300ms;
    }

    a:hover {
      color: ${theme.colors.secondary};
    }

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const OneMenu = styled.li`
  ${({ theme }) => css`
    transition: all ease-in-out 300ms;

    strong {
      color: ${theme.colors.white};
    }

    &:hover {
      transform: scale(105%);
    }

    &:active {
      transform: scale(95%);
    }
  `}
`;

export const Cart = styled(FaShoppingCart)`
  cursor: pointer;
  width: 50px;
  color: #fff;
`;
