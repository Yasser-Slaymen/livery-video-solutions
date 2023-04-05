import React from "react";
import "./App.css";
import FirstSection from "./generalComponents/FirstSection";
import Livery from "./generalComponents/Livery";
import LiveShopping from "./generalComponents/LiveShopping";
import TheLiveMethod from "./generalComponents/TheLiveMethod";
import LiveryLiveShopping from "./generalComponents/LiveryLiveShopping";
import Case from "./generalComponents/Case";
import FormIdea from "./generalComponents/FormIdea";
import PowerfulInteraction from "./generalComponents/PowerfulInteraction";
import LiveVdieo from "./generalComponents/LiveVideo";
import MoreSales from "./generalComponents/MoreSales";
import GiveDemo from "./generalComponents/GiveDemo";
import Slideshow from "./generalComponents/Slideshow";
import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Livery />
      <LiveShopping />
      <TheLiveMethod />
      <LiveryLiveShopping />
      <Case />
      <FormIdea />
      <PowerfulInteraction />
      <LiveVdieo />
      <MoreSales />
      <GiveDemo />
      <Slideshow />
      <Footer />
    </div>
  );
}
export default App;
