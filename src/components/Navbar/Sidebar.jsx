import P from 'prop-types';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cart, OneMenu } from '../Menu/styles';
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
          <Link to='/'>
            <Styled.SidebarLink>Home</Styled.SidebarLink>
          </Link>
          <Link to='/comics'>
            <Styled.SidebarLink>Ver todas as HQ</Styled.SidebarLink>
          </Link>
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
