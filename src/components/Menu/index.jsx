import { FaBars, FaSearch } from 'react-icons/fa';
import P from 'prop-types';
import { Link } from 'react-router-dom';
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
            <Styled.Search type='search' />
            <Styled.SearchButton type='submit'>
              <FaSearch />
            </Styled.SearchButton>
          </Styled.SearchWrapper>
          <Styled.OneMenu>
            <Link to='/cart'>
              <Styled.Cart />
            </Link>
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
