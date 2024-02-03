// GlucometerForm.js
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import GlucometerOptions from "./GlucometerOptions";
import mockGlucometerData from "../mock/glucoMeterMock";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledGlucometerForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
});

const StyledButton = styled(Button)({
  marginTop: "15px",
  width: "300px",
});

const StyledTextField = styled(TextField)({
  margin: "20px",
  width: "300px",
});

const GlucometerForm = ({ onNext }) => {
  const [showOptions, setShowOptions] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fastingSugarLevel: "",
    postMealSugarLevel: "",
    hba1c: "",
  });
  const navigate = useNavigate();

  const handleManualEntry = () => {
    setShowOptions(false);
    setFormValues({
      fastingSugarLevel: "",
      postMealSugarLevel: "",
      hba1c: "",
    });
  };

  const handleGlucometerData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (showOptions) {
        setFormValues(mockGlucometerData);
      }
      setShowOptions(false);
    }, 2000);
  };

  const handleNext = () => {
    // Check if all required fields are filled
    const { fastingSugarLevel, postMealSugarLevel, hba1c } = formValues;
    if (fastingSugarLevel && postMealSugarLevel && hba1c) {
      // Navigate to ActivityForm page only if all fields are filled
      navigate("/dashboard/activity");
      // Add any additional logic here based on the data
      onNext();
    } else {
      // Show an alert or handle the case where fields are not filled
      alert("Please fill in all the required fields.");
    }
  };

  useEffect(() => {
    if (!showOptions) {
      handleGlucometerData();
    }
  }, [showOptions]);

  return (
    <StyledGlucometerForm>
      <StyledTextField
        label="Fasting Sugar Level"
        variant="outlined"
        value={formValues.fastingSugarLevel}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            fastingSugarLevel: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="Post Meal Sugar Level"
        variant="outlined"
        value={formValues.postMealSugarLevel}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            postMealSugarLevel: e.target.value,
          }))
        }
      />
      <StyledTextField
        label="HbA1c"
        variant="outlined"
        value={formValues.hba1c}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, hba1c: e.target.value }))
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
        <GlucometerOptions
          onClose={() => setShowOptions(false)}
          onManual={handleManualEntry}
          onGlucometer={handleGlucometerData}
        />
      )}
    </StyledGlucometerForm>
  );
};

export default GlucometerForm;
