import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";

import CarouselEffect from "./components/Carousel/CarouselEffect";
import Category from "./components/Category/Category";
function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
    </div>
  );
}

export default App;
