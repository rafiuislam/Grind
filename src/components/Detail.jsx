import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../pages/UserContext";
import { Typography, Stack, Button } from "@mui/material";

import EquipmentImg from "../assets/icons/equipment.png";
import TargetImg from "../assets/icons/target.png";
import BodyPartImg from "../assets/icons/body-part.png";

const Detail = () => {
  const { exerciseDetail } = useContext(UserContext);
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, alignItems: "center", p: "20px" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          {name}
          {` `} is one of the best exercises to target your {target}. It will
          help improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center" gap="24px">
            <Button
              sx={{
                background: "#fff2bd",
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            >
              <img
                src={item.icon}
                alt="item.name"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
