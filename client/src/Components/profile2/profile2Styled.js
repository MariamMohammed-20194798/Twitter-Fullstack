import styled from "styled-components";

export const DivCover = styled.div`
  width: 100%;
`;
export const CoverImg = styled.img`
  width: 100%;
  height: 30vh;
  @media (max-width: 1024px) {
    height: 36vh;
  }
`;

export const DivPhoto = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 1rem;
  height: 5rem;
`;

export const Img = styled.img`
  width: 16rem;
  height: 16rem;
  top: -10rem;
  left: 1rem;
  border-radius: 50%;
  position: absolute;
  border: 0.4rem solid ${(props) => props.theme.buttonTheme.color};
  @media (max-width: 700px) {
    width: 12rem;
    height: 12rem;
    top: -5rem;
  }
`;

export const Button = styled.button`
  color: ${(props) =>
    props.btn
      ? props.theme.buttonTheme.color
      : props.theme.theme.primaryTextColor};
  background: ${(props) =>
    props.btn ? "transparent" : props.theme.buttonTheme.color};
  border: 0.1rem solid ${({ theme }) => theme.buttonTheme.color};
  font-weight: 800;
  border-radius: 3rem;
  padding: 0.8rem 1.7rem;
  transition: all 0.4s;
  margin-right: ${(props) => (props.margin ? "1.5rem" : "0")};
  &:hover {
    background: ${({ theme }) => theme.buttonTheme.Hover};
  }
`;

export const DivUserInfo = styled.div`
  padding: 2.5rem;
  padding-left: 3.5rem;
  padding-top: 2.5rem;
`;

export const P = styled.p`
  color: ${(props) =>
    props.secondary
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  font-size: ${(props) => (props.secondary ? "1.4rem" : "1.8rem")};
  font-weight: bold;
`;
export const Bio = styled.p`
  color: ${(props) => props.theme.theme.primaryTextColor};
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.6rem;
  a {
    color: ${(props) => props.theme.buttonTheme.color};
  }
`;
export const Border = styled.div`
  border-bottom: 0.1rem solid rgba(204, 204, 204, 0.2);
`;
export const Lable = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const CameraIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  font-size: 3rem;
  color: #fff;
  top: -1rem;
  left: 9rem;
  @media (max-width: 700px) {
    top: 1.3rem;
    left: 7rem;
  }
`;
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
`;
export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.theme.bgsecondaryColor};
  border: none;
  margin-bottom: 1.7rem;
  padding: 1.4rem;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.theme.primaryTextColor};
  border-bottom: 1px solid ${(props) => props.theme.theme.secondaryTextColor};
`;
export const Image = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  font-size: 3rem;
  color: #ffffff;
`;
