import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../pages/UserContext";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});

  useEffect(() => {
    const fetchExecisesData = async () => {
      const exerciseUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
      // const youTubeSearchUrl;

      const ExerciseDetailsData = await fetchData(exerciseUrl, exerciseOptions);
      setExerciseDetail(ExerciseDetailsData);
    };
    fetchExecisesData();
  }, [id]);

  return (
    <UserContext.Provider value={{ exerciseDetail }}>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </UserContext.Provider>
  );
};

export default ExerciseDetail;
