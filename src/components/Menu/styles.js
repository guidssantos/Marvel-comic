import styled, { css } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const HeaderBackground = styled.header`
  background-color: black;
`;

export const HeaderContainer = styled.div`
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

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: 10px;
    img {
      width: 150px;
    }
  `}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const HeaderMenu = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;

    a {
      margin-right: 1em;
      font-size: 16px;
      transition: all ease-in-out 300ms;
    }

    a:hover {
      color: ${theme.colors.secondary};
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  `}
`;

export const OneMenu = styled.div`
  ${({ theme }) => css`
    transition: all ease-in-out 300ms;

    &:hover {
      transform: scale(105%);
    }

    strong {
      color: white;
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
