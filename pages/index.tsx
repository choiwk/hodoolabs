import React from 'react';
import type { NextPage } from 'next';

import Header from '../components/Header/Header';

import LanLive from '../components/LanLive/LanLive';
import BookChoice from '../components/BookChoice/BookChoice';
import AppDownload from '../components/Appdownload/AppDownload';
import Live from '../components/Live/Live';
import Diary from '../components/Diary/Diary';
import SlideBooks from '../components/Slidebooks/SlideBooks';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <LanLive></LanLive>
      <BookChoice></BookChoice>
      <Live />
      <Diary />
      <SlideBooks />
      {/* <AppDownload /> */}
      <Footer />
    </div>
  );
};

export default Home;
