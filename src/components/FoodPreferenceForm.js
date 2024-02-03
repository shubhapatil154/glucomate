// FoodPreferenceForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCarrot, FaDrumstickBite, FaEgg, FaLeaf } from "react-icons/fa";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledFoodPreferenceForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
  marginLeft: "20px",
});

const StyledFormControlLabel = styled(FormControlLabel)({
  marginBottom: "20px",
  border: "1px solid",
  borderRadius: "10px",
  padding: "16px",
  width: "250px",
});

const StyledButton = styled(Button)({
  marginTop: "15px",
  width: "300px",
});

const FoodPreferenceForm = ({ onNext }) => {
  const [foodPreference, setFoodPreference] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard/summary");
    // Add any logic based on the selected food preference
    onNext();
  };

  return (
    <StyledFoodPreferenceForm>
      <RadioGroup
        value={foodPreference}
        onChange={(e) => setFoodPreference(e.target.value)}
      >
        <StyledFormControlLabel
          value="veg"
          control={<Radio />}
          label={
            <>
              <IconButton>
                <FaLeaf size={24} />
              </IconButton>
              Veg
            </>
          }
        />
        <StyledFormControlLabel
          value="non-veg"
          control={<Radio />}
          label={
            <>
              <IconButton>
                <FaDrumstickBite size={24} />
              </IconButton>
              Non-Veg
            </>
          }
        />
        <StyledFormControlLabel
          value="eggetarian"
          control={<Radio />}
          label={
            <>
              <IconButton>
                <FaEgg size={24} />
              </IconButton>
              Eggetarian
            </>
          }
        />
        <StyledFormControlLabel
          value="vegan"
          control={<Radio />}
          label={
            <>
              <IconButton>
                <FaCarrot size={24} />
              </IconButton>
              Vegan
            </>
          }
        />
      </RadioGroup>
      <StyledButton variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </StyledButton>
    </StyledFoodPreferenceForm>
  );
};

export default FoodPreferenceForm;
