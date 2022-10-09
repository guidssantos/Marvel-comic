import P from 'prop-types';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  Cart,
  Link,
  OneMenu,
  Search,
  SearchButton,
  SearchWrapper,
} from '../Menu/styles';
import * as Styled from './styles';

export function Sidebar({ isOpen, toggle }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Styled.SidebarContainer isOpen={isOpen}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink onClick={toggle} href='#'>
            Home
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href='#'>
            Ver todas as HQ
          </Styled.SidebarLink>
          <SearchWrapper>
            <Search type='search' />
            <SearchButton type='submit' onClick={toggle}>
              <FaSearch />
            </SearchButton>
          </SearchWrapper>
          <OneMenu>
            <Link to='/cart'>
              <Cart />
              <strong>{cartSize}</strong>
            </Link>
          </OneMenu>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
}

Sidebar.propTypes = {
  toggle: P.func.isRequired,
  isOpen: P.bool.isRequired,
};
