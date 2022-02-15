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
import Banner from '../components/Banner/Banner';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LanLive />
      <BookChoice />
      <Live />
      <Diary />
      <SlideBooks />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
