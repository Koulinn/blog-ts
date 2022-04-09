import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./index.css";

function App() {
  return (
    <CssBaseline>
      <Grid container>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      </Grid>
    </CssBaseline>
  );
}

export default App;
