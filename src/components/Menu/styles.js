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

export const LogoWrapper = styled.a`
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
  display: inline-flex;
  align-items: center;

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

export const SearchWrapper = styled.form`
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const Search = styled.input`
  height: 30px;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
  border: 0;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  svg {
    color: black;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;
