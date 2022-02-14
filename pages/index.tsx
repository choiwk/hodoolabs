import React from 'react';
import type { NextPage } from 'next';

import LanLive from '../components/LanLive';

const Home: NextPage = () => {
  return (
    <div>
      안녕<LanLive></LanLive>
    </div>
  );
};

export default Home;
