import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./index.css";
import BG_Video from "./components/BG_Video/BG_Video";
import Pages from "./pages/Pages";

function App() {
  return (
    <CssBaseline>
      <BG_Video />
      <Grid container>
        <BrowserRouter>
          <TopBar />
          <Pages />
        </BrowserRouter>
      </Grid>
    </CssBaseline>
  );
}

export default App;
