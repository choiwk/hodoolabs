import React from 'react';
import type { NextPage } from 'next';

import Header from '../components/Header/Header';
import LanLive from '../components/LanLive';
import BookChoice from '../components/BookChoice';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <LanLive></LanLive>
      <BookChoice></BookChoice>
    </div>
  );
};

export default Home;
