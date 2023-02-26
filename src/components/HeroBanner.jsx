import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="30px"
        mt="24px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="34px" mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "#FF2625",
          padding: "10px",
          mt: "20px",
        }}
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        fontWeight={600}
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        {/* Grind!! */}
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
