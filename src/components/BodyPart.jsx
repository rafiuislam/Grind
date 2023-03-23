import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

import { UserContext } from "../pages/UserContext";

const BodyPart = ({ item }) => {
  const { setBodyPart, bodyPart } = useContext(UserContext);

  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2626" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        width: "200px",
        height: "50px",
        gap: "20px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);

        window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
      }}
    >
      {/* <img
        src={Icon}
        alt="bodyPart"
        style={{ width: "50px", height: "50px" }}
      /> */}
      <Typography
        fontSize="24px"
        textTransform="capitalize"
        color="#3A1212"
        fontWeight="bold"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
