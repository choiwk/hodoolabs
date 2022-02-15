import React from "react";
import type { NextPage } from "next";

import Header from "../components/Header/Header";

import LanLive from "../components/LanLive/LanLive";
import BookChoice from "../components/BookChoice/BookChoice";
import AppDownload from "../components/Appdownload/AppDownload";
import Live from "../components/Live/Live";
import Diary from "../components/Diary/Diary";
import SlideBooks from "../components/Slidebooks/SlideBooks";
import Banner from "../components/Banner/Banner";

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <Banner />
      <LanLive></LanLive>
      <BookChoice></BookChoice>
      <Live />
      <Diary />
      <SlideBooks />
      {/* <AppDownload /> */}
    </div>
  );
};

export default Home;
