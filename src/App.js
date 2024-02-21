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
          xs={12}
          md={1.5}
          xl={3}
          item
          sx={{ p: "1rem", overflow: "hidden" }}
        >
          {/* Navbar */}
          <Navbar />
        </Grid>
        <Grid
          xs={12}
          md={10.5}
          xl={9}
          item
          sx={{ p: "1rem", overflow: "hidden" }}
        >
          {/* content */}
          <Box sx={{ width: "98%", maxWidth: "1100px", margin: "0 auto" }}>
            {router}
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
