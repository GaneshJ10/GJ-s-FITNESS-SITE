import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

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
      <Typography color="#7CFC00" fontWeight="700" fontSize="40px">
        Fitness Club
      </Typography>
      <Typography color="#FFFFFF"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography color="#FFFFFF" fontSize="22px" lineHeight={"35px"} mb={4}>
        Check out the most effictive Exercises
      </Typography>
      
      <Button
  className="expbtn"
  href="#searchexercise"
  sx={{
    backgroundColor: "#36454F !important",
    border: "1px solid #AAFF00 !important",
    color: "#ffff !important",
    transition: "all 0.3s ease-in-out", // Added transition for all properties
    '&:hover': {
      backgroundColor: "#AAFF00 !important",
      borderColor: "#36454F !important",
      color: "#000000 !important",
      filter: "brightness(110%) saturate(125%)",
      transform: "scale(1.1)",
    
    },
    padding: "10px",
  }}
>
  Explore Exercises
</Button>


      <Typography
        fontWeight={600}
        color="#0FFF50"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
