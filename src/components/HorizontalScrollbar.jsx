import React, { useContext } from "react";
import { Stack, Typography, Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      gap={4}
      sx={{
        flexWrap: "wrap",
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          id={item.id || item}
          title={item.id || item}
          m="5px"
        >
          <BodyPart item={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default HorizontalScrollbar;
