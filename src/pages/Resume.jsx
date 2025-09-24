import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import BeginnerTag from "../components/Navbar/BeginnerTag";
import { skills } from "../constants/resumeSkills";

const Resume = () => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        bgcolor: "#1E1E1E",
        color: "#CCCCCC",
        m: "40px auto",
        p: 4,
        borderRadius: 2,
        boxShadow: "0 0 20px rgba(0,0,0,0.7)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <Typography variant="h3" gutterBottom sx={{ color: "#00FFD1" }}>
        Reza NourMohammadi
      </Typography>

      {/* Contact Info */}
      <Box sx={{ mb: 3 }}>
        <Typography>
          Email:{" "}
          <Link href="mailto:rnoorh.work@gmail.com" sx={{ color: "#00FFD1" }}>
            rnoorh.work@gmail.com
          </Link>{" "}
          | Phone: 09105626221
        </Typography>
        <Typography></Typography>
        <Typography>
          <Link
            href="http://localhost:5173/portfolio/home"
            sx={{ color: "#00FFD1" }}
          >
            Portfolio
          </Link>{" "}
          |{" "}
          <Link
            href="https://www.linkedin.com/in/reza7382"
            sx={{ color: "#00FFD1" }}
          >
            Linkedin
          </Link>{" "}
          |{" "}
          <Link href="https://t.me/rnoorh7382" sx={{ color: "#00FFD1" }}>
            Telegram
          </Link>{" "}
          |{" "}
          <Link href="https://github.com/tronix-7382" sx={{ color: "#00FFD1" }}>
            GitHub
          </Link>
        </Typography>
      </Box>

      <Divider sx={{ mb: 5, borderColor: "#444" }} />

      {/* Personal Info */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#00FFD1" }}>
          Personal Info
        </Typography>
        <Typography>Birthdate: 28/02/1383 | Location: Mashhad, Iran</Typography>
        <Typography>Interests: Coding, Sports, Gaming</Typography>
      </Box>

      {/* Objective */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#00FFD1" }}>
          Objective / Summary
        </Typography>
        <Typography sx={{color : "#CCCCCC"}}>
          Aspiring Full-Stack MERN Developer with ~2 years of self-driven
          experience in frontend and backend development. Skilled in React,
          Node.js, Express, MongoDB, TypeScript, and modern web technologies.
          Currently working on a full-stack project to strengthen practical
          skills.
        </Typography>
      </Box>

      {/* Education */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#00FFD1" }}>
          Education
        </Typography>
        <Typography>
          <strong>Bachelor’s in Computer Engineering</strong> – Islamic Azad
          University, Mashhad (Currently studying)
        </Typography>
      </Box>

      {/* Skills */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#4DD0E1" }}>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  bgcolor: "#2E2E2E",
                  color: "#CCCCCC",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: "0.85rem",
                }}
              >
                {skill.name}
                {skill.tag && <BeginnerTag />}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Projects */}
      <Box sx={{ mb: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#4DD0E1" }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "#2E2E2E",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              mb: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#80CBC4" }}>
              Full E-commerce Project (React + SCSS)
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "#CCCCCC" }}>
              Complete store with admin dashboard, responsive layout, and animations.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#2E2E2E",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              mb: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#80CBC4" }}>
              Backend API Project
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "#CCCCCC" }}>
              RESTful API with authentication using JWT, MongoDB + Mongoose.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "#2E2E2E",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#80CBC4" }}>
              Current Project
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "#CCCCCC" }}>
              Full-stack MERN application under development.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>

      {/* Certifications */}
      <Box sx={{ mb: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#4DD0E1" }}>
        Certifications
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ color: "#CCCCCC" }}>i3Center, Mashhad: HTML & CSS</Typography>
            <Typography sx={{ color: "#CCCCCC" }}>i3Center, Mashhad: JavaScript & jQuery</Typography>
            <Typography sx={{ color: "#CCCCCC" }}>i3Center, Mashhad: React.js</Typography>
            <Typography sx={{ color: "#CCCCCC" }}>i3Center, Mashhad: Figma</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ color: "#CCCCCC" }}>SoloLearn: HTML, CSS, JS, React</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>

      <Box sx={{ mt: 4, textAlign: "center", fontSize: 12, color: "#777" }}>
        © 2025 Reza NourMohammadi | All rights reserved
      </Box>
    </Box>
  );
};

export default Resume;
