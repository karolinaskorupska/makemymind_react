import React from "react";

import Welcome from "../components/index/Welcome";
import Proces from "../components/index/Proces";
import Opinie from "../components/index/Opinie";
import Calendar from "../components/index/Calendar";

const Index = () => {
  return (
    <main>
      <div className="container">
        <Welcome />
        {/* <Proces />
      </div>
      <Opinie />
      <div className="container">
        <Calendar /> */}
      </div>
    </main>
  );
};

export default Index;
