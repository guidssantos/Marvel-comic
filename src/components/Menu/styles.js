import styled, { css } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const HeaderBackground = styled.header`
  background-color: black;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
`;

export const LogoWrapper = styled.a`
  ${({ theme }) => css`
    img {
      width: 100px;
    }
  `}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const HeaderMenu = styled.div`
  display: inline-flex;

  a {
    margin-right: 1em;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OneMenu = styled.li`
  ${({ theme }) => css`
    transition: all ease-in-out 300ms;

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
  width: 100px;
  color: #fff;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    padding: 10px 50px;
    background: ${theme.colors.primary};
    color: white;
    border-radius: 5px;
    cursor: pointer;
  `}
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css``}
`;
