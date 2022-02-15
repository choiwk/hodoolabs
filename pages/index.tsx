import React from "react";
import type { NextPage } from "next";

import LanLive from "../components/LanLive";
import Compo from "../components/Compo";

const Home: NextPage = () => {
  return (
    <div>
      <LanLive></LanLive>
      <Compo />
    </div>
  );
};

export default Home;
