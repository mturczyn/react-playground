import Navbar from "./components/Navbar/Navbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Grid container={true}>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
