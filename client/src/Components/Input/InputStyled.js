import styled from "styled-components";
export const InputText = styled.input`
  width: 70%;
  height: 6.5vh;
  padding: 1.5rem;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #cfd9de;
  color: ${(props) => props.theme.primaryTextColor};
  border-bottom: 1px solid ${(props) => props.theme.secondaryTextColor};
  &:hover {
    border-color: rgb(29, 155, 240);
  }
  &:placeholder {
    color: #536471;
    font-size: 1.3rem;
  }
`;
