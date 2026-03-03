import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import HeroProvide from "./context/heroContext";

function App() { 
  return (
    <div>
      <HeroProvide>
        <RouterProvider router={router} />
      </HeroProvide>
    </div>
  );
}

export default App;
