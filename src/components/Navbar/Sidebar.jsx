import P from 'prop-types';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
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
          <OneMenu onClick={toggle}>
            <Cart />
          </OneMenu>
          <OneMenu onClick={toggle}>
            <Link href='/'>Login</Link>
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
