import React from "react";
import { Stack } from "react-bootstrap";
import Navbaritem from "../components/Navbar";
import Search from "../components/Search";
import CardDisplay from "../components/CardDisplay";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Stack gap={5}>
          <Navbaritem />
          <h1 className="mx-auto">
            Are you looking for nearby service providers?
          </h1>
          <h2>Hire Top service providers fast </h2>
          <Search />
          <CardDisplay/>
          <Footer/>
        </Stack>
      </div>
    </>
  );
};

export default Home;
