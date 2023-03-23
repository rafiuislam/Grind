import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

import { UserContext } from "../pages/UserContext";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const { setExercises } = useContext(UserContext);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts([...bodyPartsData, "all"]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const SearchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          exercise.bodyPart
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          exercise.equipment
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase().trim())
      );
      setSearch("");
      // console.log(SearchedExercises);
      setExercises(SearchedExercises);
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" mt="26px" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
      >
        Awesome Exercises You <br /> Should Try
      </Typography>
      <Box
        mb="20px"
        sx={{ position: "relative", padding: "20px", width: "100%" }}
      >
        <HorizontalScrollbar data={bodyParts} />
      </Box>
      <Box position="relative" mb="50px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              borderRadius: "4px",
              border: "none",
              outline: "none",
            },
            width: { lg: "700px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "#fff",
          }}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for Exercises.."
          height="76px"
        />
        <Button
          className="search-btn"
          sx={{
            color: "#fff",
            bgcolor: "#FF2625",
            textTransform: "none",
            height: "56px",
            position: "absolute",
            right: "0",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={() => {
            handleSearch();
            window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
