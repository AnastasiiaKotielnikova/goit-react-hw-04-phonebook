import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputItem = styled.label`
  margin-bottom: 20px;
  width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  display: block;
  font-size: 14px;
  display: block;
  margin-top: 30px;
`;

export const Input = styled(Field)`
  font-size: inherit;
  font-family: inherit;
  display: block;
  width: 300px;
  height: 20px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-width: 3px;
  border-image: linear-gradient(to right, #818588, #22bbe6);
  border-image-slice: 1;
  background: transparent;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto 20px auto;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  color: #ffffff;
  background: #818588;
  background: linear-gradient(to right, #818588, #81bdd3, , #22bbe6);
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;

export const ValidationError = styled(ErrorMessage)`
  color: red;
`;
