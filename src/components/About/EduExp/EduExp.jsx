import { Box } from "@mui/material";
import React from "react";
import EduExpContainer from "./EduExpContainer";
import { educationData, experienceData } from "../../../constants/EduExpData";

function EduExp() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          border: "1px solid rgba(0,160,250,0.1)",
          padding: ".8rem 1rem",
          width:'100%',
          display:'flex',
          alignItems:'stretch',
          justifyContent:'center',
          gap:{xs:'.5rem',md:'2rem'},
          flexWrap:'wrap'
        }}
      >
        <EduExpContainer title='Education' data={educationData}/>
        <EduExpContainer title='Experience' data={experienceData}/>
      </Box>
    </>
  );
}

export default EduExp;
