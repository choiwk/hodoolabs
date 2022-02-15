import React from 'react';
import type { NextPage } from 'next';

import LanLive from '../components/LanLive';
import BookChoice from '../components/BookChoice';

const Home: NextPage = () => {
  return (
    <div>
      <LanLive></LanLive>
      <BookChoice></BookChoice>
    </div>
  );
};

export default Home;
