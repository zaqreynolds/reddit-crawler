import React from "react";
import { Results } from "./views/Results";
import { Route, Routes } from "react-router-dom";
import { Details } from "./views/Details";
import Layout from "./views/Layout";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Grey from "@mui/material/colors/grey";

function App() {
  const isSmallViewport = useMediaQuery("(max-width:600px)");
  const theme = createTheme({
    typography: {
      fontSize: isSmallViewport ? 12 : 14,
    },
    palette: {
      primary: {
        main: Grey[900],
        medium: Grey[600],
        lighter: Grey[300],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Results />} />
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
