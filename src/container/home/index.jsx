import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "../header";
import CertBody from "../body";
import Footer from "../footer";
import Loader from "../../components/Loader";

const Home = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const url =
      "https://6448accae7eb3378ca335cf3.mockapi.io/api/v1/certificate";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.status);
      }
      const json = await res.json();
      setData(json[0]);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return data ? (
    <div className="cert my-3 mx-auto md:w-[90vw] lg:w-[40vw] relative ">
      <Container maxWidth="xl" id="cert-container">
        <Header />
        <CertBody data={data} />
        <Footer />
      </Container>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
