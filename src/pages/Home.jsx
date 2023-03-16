import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

import { UserContext } from "./UserContext";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <UserContext.Provider
      value={{ setBodyPart, bodyPart, setExercises, exercises }}
    >
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </UserContext.Provider>
  );
};

export default Home;
