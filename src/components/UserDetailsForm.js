// UserDetailsForm.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledUserDetailsForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
});

const StyledTextField = styled(TextField)({
  margin: "20px",
  width: "300px",
});

const StyledRadioGroup = styled(RadioGroup)({
  margin: "20px",
  flexDirection: "row",
});

const StyledButton = styled(Button)({
  margin: "15px",
  width: "300px",
});

const UserDetailsForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male", // Default to male
    weight: "",
    height: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleNext = () => {
    if (
      Object.values(formData).some((field) => field === "" || field === null)
    ) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    onNext();
    navigate("/dashboard/glucometer");
  };

  return (
    <StyledUserDetailsForm>
      <StyledTextField
        label="Name"
        variant="outlined"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <StyledTextField
        label="Age"
        variant="outlined"
        type="number"
        onChange={(e) => handleInputChange("age", e.target.value)}
      />
      <StyledRadioGroup
        aria-label="gender"
        name="gender"
        value={formData.gender}
        onChange={(e) => handleInputChange("gender", e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="others" control={<Radio />} label="Others" />
      </StyledRadioGroup>
      <StyledTextField
        label="Weight"
        variant="outlined"
        type="number"
        onChange={(e) => handleInputChange("weight", e.target.value)}
      />
      <StyledTextField
        label="Height"
        variant="outlined"
        type="number"
        onChange={(e) => handleInputChange("height", e.target.value)}
      />
      <StyledButton variant="contained" color="primary" onClick={handleNext}>
        Next
      </StyledButton>
    </StyledUserDetailsForm>
  );
};

export default UserDetailsForm;
