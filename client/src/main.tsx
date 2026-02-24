import "./index.css"
import "./lib/i18n";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./router";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root")!;

createRoot(root).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
