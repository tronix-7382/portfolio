import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer";

function App() {
  const router = useRoutes(routes());
  return (
    <>
      <Grid container>
        <Grid
          size={{ xs: 12, md:2.5, xl:4}}
        >
          {/* Navbar */}
          <Navbar />
        </Grid>
        <Grid
          size={{ xs: 12, md:8.5, xl:7}}
          sx={{overflow: "hidden"}}
        >
          {/* content */}
          <Box sx={{ width: "100%", maxWidth: "1100px", margin: "1rem auto" }}>
            {router}
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
