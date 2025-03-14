import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Home from "./pages/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>
);
