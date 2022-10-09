import styled, { css } from 'styled-components';

export const Background = styled.div`
  background-color: #212121;
  min-height: 100vh;
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    top: 30rem;
    left: 60rem;

    &::before,
    &:after {
      content: '';
      position: absolute;
      border-radius: inherit;
    }

    &:before {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
      animation: spin8932 0.5s infinite linear;
    }

    &:after {
      width: 85%;
      height: 85%;
      background-color: #212121;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes spin8932 {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
