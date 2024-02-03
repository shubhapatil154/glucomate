// ActivityForm.js
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import SmartwatchOptions from "./SmartWatchOptions";
import { useNavigate } from "react-router-dom";
import mockSmartwatchData from "../mock/smartWatchMock";

const StyledActivityForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  width: "300px",
});

const StyledButton = styled(Button)({
  marginTop: "15px",
  width: "300px",
});

const ActivityForm = ({ onNext }) => {
  const [showOptions, setShowOptions] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    stepCount: "",
    walkKm: "",
    burnedCalories: "",
    activeMinutes: "",
    hoursSlept: "",
  });
  const navigate = useNavigate();

  const handleManualEntry = () => {
    setShowOptions(false);
    setFormValues({
      stepCount: "",
      walkKm: "",
      burnedCalories: "",
      activeMinutes: "",
      hoursSlept: "",
    });
  };

  const handleSmartwatchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (showOptions) {
        setFormValues(mockSmartwatchData);
      }
      setShowOptions(false);
    }, 2000);
  };

  const handleNext = () => {
    // Check if all required fields are filled
    const { stepCount, walkKm, burnedCalories, activeMinutes, hoursSlept } =
      formValues;
    if (stepCount && walkKm && burnedCalories && activeMinutes && hoursSlept) {
      // Navigate to FoodPreferenceForm page only if all fields are filled
      navigate("/dashboard/food-preference");
      // Add any additional logic here based on the data
      onNext();
    } else {
      // Show an alert or handle the case where fields are not filled
      alert("Please fill in all the required fields.");
    }
  };

  useEffect(() => {
    if (!showOptions) {
      handleSmartwatchData();
    }
  }, [showOptions]);

  return (
    <StyledActivityForm>
      <StyledTextField
        label="Step Count"
        variant="outlined"
        value={formValues.stepCount}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            stepCount: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="Walk in Km"
        variant="outlined"
        value={formValues.walkKm}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            walkKm: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="Burned Calories"
        variant="outlined"
        value={formValues.burnedCalories}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            burnedCalories: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="Active Minutes"
        variant="outlined"
        value={formValues.activeMinutes}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            activeMinutes: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="Number of Hours Slept"
        variant="outlined"
        value={formValues.hoursSlept}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            hoursSlept: e.target.value,
          }))
        }
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <StyledButton variant="contained" color="primary" onClick={handleNext}>
          Next
        </StyledButton>
      )}

      {showOptions && (
        <SmartwatchOptions
          onClose={() => setShowOptions(false)}
          onManual={handleManualEntry}
          onSmartwatch={handleSmartwatchData}
        />
      )}
    </StyledActivityForm>
  );
};

export default ActivityForm;
