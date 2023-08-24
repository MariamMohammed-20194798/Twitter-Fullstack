import styled from "styled-components";

export const Main = styled.main`
  height: 98vh;
  display: grid;
  grid-template-rows: 95% 5%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`;
export const Img = styled.img`
  width: 100%;
  height: 94.5vh;
`;
export const Fatwitter1 = styled.i`
  position: absolute;
  top: 20rem;
  left: 25rem;
  color: white;
  font-size: 30rem;
`;
export const ContentContainer = styled.div`
  display: flex;
  margin-top: 15em;
  margin-left: 5rem;
  flex-direction: column;
`;
export const Fatwitter2 = styled.i`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  color: rgb(29, 155, 240);
`;
export const Strong = styled.strong`
  font-size: ${(el) => (el.primary ? " 6rem" : "2.5rem")};
`;

export const CreateBtn = styled.button`
  width: 50%;
  height: 5vh;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 3rem;
  border-radius: 5rem;
  background-color: rgb(29, 155, 240);
  &:hover {
    background-color: rgb(7, 101, 163);
  }
`;
export const Text = styled.strong`
  margin-top: 5rem;
  font-size: 1.5rem;
`;
export const SigninBtn = styled.button`
  width: 50%;
  height: 5vh;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5rem;
  margin-top: 2rem;
  color: rgb(29, 155, 240);
  background-color: #ffffff;
  border: 0.1rem solid #cfd9de;
  &:hover {
    background-color: #f1f2f3;
  }
`;
