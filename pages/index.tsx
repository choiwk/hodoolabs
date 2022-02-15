import React from 'react';
import type { NextPage } from 'next';

import Header from '../components/Header/Header';
import LanLive from '../components/LanLive';
import BookChoice from '../components/BookChoice';
import AppDownload from '../components/Appdownload/AppDownload';
import Live from '../components/Live/Live';
import Diary from '../components/Diary/Diary';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <LanLive></LanLive>
      <BookChoice></BookChoice>
      <Live />
      <Diary />
      <AppDownload />
    </div>
  );
};

export default Home;
