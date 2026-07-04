import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return <AppRoutes />;
}

export default App;
