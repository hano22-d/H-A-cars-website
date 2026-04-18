import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import HeroProvide from "./context/heroContext";
import ThemeWrapper from "./Theme/theme.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeToggleProvider from "./context/themeContext.jsx";


function App() {
  return (
    <div>
        <ThemeToggleProvider>
          <ThemeWrapper>
            <CssBaseline>
              <HeroProvide>
                <useCarData>
                  <RouterProvider router={router} />
                  </useCarData>
              </HeroProvide>
            </CssBaseline>
          </ThemeWrapper>
        </ThemeToggleProvider>
    </div>
  );
}

export default App;
