import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  text-align: center;
  align-self: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.theme.bgprimaryColor};
`;
export const Fatwitter2 = styled.i`
  font-size: 4rem;
  margin-top: 4em;
  margin-bottom: 3rem;
  color: rgb(29, 155, 240);
`;
export const Strong = styled.strong`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-size: ${(el) => (el.primary ? " 6rem" : "2.5rem")};
`;

export const CreateBtn = styled.button`
  padding: 1rem 7.5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 3rem;
  border-radius: 5rem;
  text-align: center;
  align-self: center;
  background-color: rgb(29, 155, 240);
  &:hover {
    background-color: rgb(7, 101, 163);
  }
`;
export const Text = styled.strong`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  margin-top: 4rem;
  font-size: 1.5rem;
`;
export const SigninBtn = styled.button`
  padding: 1rem 10rem;
  margin-bottom: 15em;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5rem;
  margin-top: 2rem;
  text-align: center;
  align-self: center;
  color: rgb(29, 155, 240);
  background-color: #ffffff;
  border: 0.1rem solid #cfd9de;
  &:hover {
    background-color: #f1f2f3;
  }
`;
