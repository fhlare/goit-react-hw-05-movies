import styled from "styled-components";
import {
  Form as FormikForm,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-left: 48px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-right: none;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;


export const Field = styled(FormikField)`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border-left: none;
  outline: none;
`;