import { StrictMode } from "react";
import "@mantine/core/styles.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { LocationContextProvider } from "./context/LocationContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </MantineProvider>
  </StrictMode>
);
