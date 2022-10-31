import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 20px;
  }
  span {
    margin-left: 10px;
  }
  button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    background: #818588;
    background: linear-gradient(to right, #818588, #81bdd3, #22bbe6);
    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.2);
    }
  }
`;
