import styled, { css } from 'styled-components';

export const Background = styled.div`
  background-color: #212121;

  min-height: 100vh;
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Loading = styled.div`
  ${(theme) => css`
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;

    &::before,
    &:after {
      content: '';
      position: absolute;
      border-radius: inherit;
    }

    &:before {
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #e32636 0%, #d21a12 100%);
      animation: spinner 0.5s infinite linear;
    }

    &:after {
      width: 85%;
      height: 85%;
      background-color: #212121;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
