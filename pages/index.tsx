import React from 'react';
import type { NextPage } from 'next';

import LanLive from '../components/LanLive';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <LanLive></LanLive>
    </div>
  );
};

export default Home;
