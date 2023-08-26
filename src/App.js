import React from "react";
import { Results } from "./components/Results";
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
      primary: Grey,
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
