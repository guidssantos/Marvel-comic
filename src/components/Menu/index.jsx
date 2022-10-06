import { FaBars } from 'react-icons/fa';
import P from 'prop-types';
import * as Styled from './styles';
import logo from '../../assets/logo/marvel-comics-logo.png';

export function Menu({ toggle }) {
  return (
    <Styled.HeaderBackground>
      <Styled.HeaderContainer>
        <Styled.LogoWrapper>
          <img src={logo} alt='Marvel' />
        </Styled.LogoWrapper>
        <Styled.MobileIcon onClick={toggle}>
          <FaBars />
        </Styled.MobileIcon>
        <Styled.HeaderMenu>
          <Styled.SearchWrapper>
            <input type='search' />
            <input type='submit' />
          </Styled.SearchWrapper>
          <Styled.OneMenu>
            <Styled.Cart />
          </Styled.OneMenu>
          <Styled.OneMenu>
            <Styled.Link>Login</Styled.Link>
          </Styled.OneMenu>
        </Styled.HeaderMenu>
      </Styled.HeaderContainer>
    </Styled.HeaderBackground>
  );
}

Menu.propTypes = {
  toggle: P.func.isRequired,
};
