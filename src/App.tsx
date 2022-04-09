import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./index.css";
import ASSETS_LINKS from "./assets/links";
import BG_Video from "./components/BG_Video/BG_Video";

function App() {
  return (
    <CssBaseline>
      <BG_Video />
      <Grid container>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      </Grid>
    </CssBaseline>
  );
}

export default App;
