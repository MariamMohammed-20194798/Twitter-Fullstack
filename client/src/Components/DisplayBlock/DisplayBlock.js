import * as React from "react";
import Color from "./../Color/Color";
import Modal from "@mui/material/Modal";
import pic2 from "./../../imgs/pic2.jpeg";
import blue from "../../assets/blue.svg";
import pink from "../../assets/pink.svg";
import green from "../../assets/green.svg";
import yellow from "../../assets/yellow.svg";
import orange from "../../assets/orange.svg";
import purple from "../../assets/purple.svg";
import CloseMoreNav from "../CloseMoreNav/CloseMoreNav";
import TweetPreview from "../TweetPreview/TweetPreview";
import ButtonTheme from "../ButtonTheme/ButtonTheme";

import {
  P,
  H4,
  Div,
  Div2,
  Form,
  Form2,
  Button,
  Header,
  Navlink,
  DivBlock,
  Container,
  DivDisplay,
} from "./DisplayBlockSyled";

const DisplayBlock = (props) => {
  const [isChecked, setIsChecked] = React.useState("LightMode");
  const [isCheckedButton, setIsCheckedButton] = React.useState("blue");
  const handleClick = (Id) => {
    setIsChecked(Id);
  };

  const handleClickButton = (buttonId) => {
    setIsCheckedButton(buttonId);
  };

  const colors = [
    { id: "blue", img: blue },
    { id: "yellow", img: yellow },
    { id: "pink", img: pink },
    { id: "purple", img: purple },
    { id: "orange", img: orange },
    { id: "green", img: green },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    handleOpen();
  }, []);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Div>
          <Header>
            <H4>Customize your view</H4>
            <P>
              Display settings affect all of your Twitter accounts on this
              browser. These settings are only visible to you.
            </P>
          </Header>
          <DivDisplay>
            <TweetPreview userimg={pic2} name="Mariam" handle="Mariam_mo7ammed">
              At the heart of Twitter are short messages called Tweets — just
              like this one — which can include photos, videos, links, text.
            </TweetPreview>
          </DivDisplay>
          <Div2>
            <div>
              <P title="true">Color</P>
            </div>
          </Div2>
          <DivBlock secondry>
            <Form>
              {colors.map((color) => (
                <Color
                  key={color.id}
                  id={color.id}
                  img={color.img}
                  checked={isCheckedButton === `${color.id}`}
                  onHandle={() => handleClickButton(`${color.id}`)}
                />
              ))}
            </Form>
          </DivBlock>
          <div>
            <P title="true">Background</P>
          </div>
          <DivBlock secondry>
            <Form2>
              <ButtonTheme
                id="LightMode"
                name="Light Mode"
                checked={isChecked === "LightMode"}
                onHandle={() => handleClick("LightMode")}
              />
              <ButtonTheme
                id="DimMode"
                name="Dim Mode"
                checked={isChecked === "DimMode"}
                onHandle={() => handleClick("DimMode")}
              />
              <ButtonTheme
                id="DarkMode"
                name="Dark Mode"
                checked={isChecked === "DarkMode"}
                onHandle={() => handleClick("DarkMode")}
              />
            </Form2>
          </DivBlock>
          <Navlink to="/Home">
            <Button>Done</Button>
          </Navlink>
        </Div>
      </Container>
    </Modal>
  );
};
export default DisplayBlock;
