import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card.jsx";
import Footer from "./Footer";
// import {render} from "react-dom";
// import { preprocessCSS } from "vite";

//include images into your bundle


//create your first component
const Home = () => {

  const Cards = [
    {
      title: "cardOne",
      image: "https://placehold.co/600x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },

    {
      title: "cardTwo",
      image: "https://placehold.co/600x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },


    {
      title: "cardThree",
      image: "https://placehold.co/600x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },

    {
      title: "cardFour",
      image: "https://placehold.co/600x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
  ];

  return (
    <div className='container'>
      <div>
        <Navbar />
      </div>
      <div>
        <Jumbotron />
      </div>
      <div className="row">
        {Cards.map((card, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <Card card={card} />
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};


export default Home; 