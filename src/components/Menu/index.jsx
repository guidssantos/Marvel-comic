import { FaBars, FaSearch } from 'react-icons/fa';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './styles';
import logo from '../../assets/logo/marvel-comics-logo.png';

export function Menu({ toggle }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Styled.HeaderBackground>
      <Styled.HeaderContainer>
        <Styled.LogoWrapper>
          <Link to='/'>
            <img src={logo} alt='Marvel' />
          </Link>
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
              <strong>{cartSize}</strong>
            </Link>
          </Styled.OneMenu>
        </Styled.HeaderMenu>
      </Styled.HeaderContainer>
    </Styled.HeaderBackground>
  );
}

Menu.propTypes = {
  toggle: P.func.isRequired,
};
