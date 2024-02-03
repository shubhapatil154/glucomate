// SignInSignUpPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import users from "../mock/userMock";
import HeroBanner from "./HeroBanner";

const StyledSignInSignUpPage = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
  paddingTop: "50px",
  fontFamily: "'Montserrat', sans-serif",
});

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "100px",
  paddingTop: "50px",
  fontFamily: "'Montserrat', sans-serif",
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  width: "300px",
});

const StyledButton = styled(Button)({
  marginTop: "15px",
  width: "300px",
});

const SignInSignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <StyledContainer>
      <HeroBanner />
      <StyledSignInSignUpPage>
        <StyledTextField
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSignIn}
        >
          Sign In
        </StyledButton>
        <p>
          New User? <Link to="/signup">Sign up</Link>
        </p>
      </StyledSignInSignUpPage>
    </StyledContainer>
  );
};

export default SignInSignUpPage;
