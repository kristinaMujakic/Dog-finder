import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DogRoutes from "./DogRoutes";
import NavBar from "./NavBar";

import whiskey from "./img/whiskey.jpg";
import tubby from "./img/tubby.jpg";
import duke from "./img/duke.jpg";
import perry from "./img/perry.jpg";

const App = ({ dogs }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<div><NavBar dogs={dogs} /><DogRoutes dogs={dogs} /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

App.defaultProps = { dogs };

export default App;
