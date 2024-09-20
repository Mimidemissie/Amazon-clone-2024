import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { InitialState, reducer } from "./Utility/Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} InitialState={InitialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
