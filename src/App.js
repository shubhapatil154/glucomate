// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignInSignUpPage from "./components/SignInSignUpPage";
import UserDetailsForm from "./components/UserDetailsForm";
import GlucometerForm from "./components/GlucometerForm";
import ActivityForm from "./components/ActivityForm";
import FoodPreferenceForm from "./components/FoodPreferenceForm";
import Summary from "./components/Summary";
import DietPlan from "./components/DietPlan";

const App = () => {
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setProgress((prev) => prev + 25);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSignUpPage />} />
        <Route
          path="/dashboard/*"
          element={
            <Layout progress={progress}>
              <Routes>
                <Route
                  index
                  element={
                    <UserDetailsForm
                      onNext={handleNext}
                      disabled={progress < 25}
                    />
                  }
                />
                <Route
                  path="glucometer"
                  element={
                    <GlucometerForm
                      onNext={handleNext}
                      disabled={progress < 50}
                    />
                  }
                />
                <Route
                  path="activity"
                  element={
                    <ActivityForm
                      onNext={handleNext}
                      disabled={progress < 75}
                    />
                  }
                />
                <Route
                  path="food-preference"
                  element={<FoodPreferenceForm onNext={handleNext} />}
                />
                <Route
                  path="summary"
                  element={<Summary onNext={handleNext} />}
                />
                <Route
                  path="diet-plan"
                  element={<DietPlan onNext={handleNext} />}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
