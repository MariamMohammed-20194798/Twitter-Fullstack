import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Container,
  Text,
  Fatwitter2,
  Strong,
  CreateBtn,
  SigninBtn,
} from "./WelcomeStyled";

function Welcome() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1.5px solid #000",
    borderRadius: "1.5rem",
    boxShadow: 24,
    p: 5,
  };
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const handleOpenSignin = () => setOpenSignin(true);
  const handleCloseSignin = () => setOpenSignin(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  return (
    <Container>
      <Fatwitter2>
        <FaTwitter />
      </Fatwitter2>
      <Strong primary>Happening now</Strong>
      <Strong>Join Twitter today.</Strong>
      <CreateBtn onClick={handleOpenSignup}>Create account</CreateBtn>
      <Modal
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Signup />
          </Typography>
        </Box>
      </Modal>

      <Text>Already have an account?</Text>
      <SigninBtn onClick={handleOpenSignin}>Sign in</SigninBtn>
      <Modal
        open={openSignin}
        onClose={handleCloseSignin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Signin />
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}
export default Welcome;
