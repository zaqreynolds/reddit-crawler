import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { setIsMobile } from "./components/displaySlice";

function App() {
  const dispatch = useDispatch();
  const isMobie = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    dispatch(setIsMobile(isMobie));
  }, [dispatch, isMobie]);

  const theme = createTheme({
    typography: {
      fontSize: isMobie ? 12 : 14,
    },
    palette: {
      primary: {
        main: Grey[900],
        medium: Grey[600],
        lighter: Grey[300],
      },
      mode: "dark",
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
