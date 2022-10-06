import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export function Sidebar({ isOpen, toggle }) {
  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
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
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
}

Sidebar.propTypes = {
  toggle: P.func.isRequired,
  isOpen: P.bool.isRequired,
};
