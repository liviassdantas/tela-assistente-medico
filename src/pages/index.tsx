import React from "react";
import Header from "../app/components/Header";

const userName = "Fulano";
const userImage = "/diluc.jpg";
const Home: React.FC = () => {
  return (
    <div>
      <Header userName={userName} userImage={userImage}/>
      <main>
      </main>
    </div>
  );
};

export default Home;
