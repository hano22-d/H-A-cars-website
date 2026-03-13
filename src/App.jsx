import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import HeroProvide from "./context/heroContext";
import ThemeWrapper from './Theme/theme.jsx';
import CssBaseline from "@mui/material/CssBaseline";
import ThemeToggleProvider from "./context/themeContext.jsx";
import { CssVarsProvider } from '@mui/joy/styles';

function App() { 
  return (
    <div>
      <CssVarsProvider>
      <ThemeToggleProvider>
      <ThemeWrapper>
        <CssBaseline>
      <HeroProvide>
        <RouterProvider router={router} />
      </HeroProvide>
      </CssBaseline>
      </ThemeWrapper>
      </ThemeToggleProvider>
      </CssVarsProvider>
    </div>
  );
}

export default App;
