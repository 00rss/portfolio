import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel/Carousel";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import linkIcon from "../assets/icons/avion-de-papel.png";

const Home = () => {
  const [repositories, setrepositories] = useState([]);
  const getRepositories = () => {
    fetch("https://api.github.com/users/00rss/repos")
      .then((res) => (res.status == 200 ? res.json() : null))
      .then((data) => {
        console.log("data", data);
        setrepositories(data);
      });
  };

  useEffect(() => {
    getRepositories();
    console.log(typeof repositories);
  }, []);

  return (
    <Layout>
      <div className="text-center p-[1rem_2rem]">
        <section className="">
          <Carousel
            carouselItems={[
              <div className="w-4/5 m-auto grid grid-cols-[repeat(3,1fr)] gap-5">
                <Card
                  title="Reloj analógico"
                  description="Reloj analógico realizado con Vanilla JavaScript, Html5 y Css. Con opción para cambiar de Zona horario, colores, tamaño, etc."
                  link="http://localhost:5173/"
                  icon={linkIcon}
                  linkLegend="Click para revisar el proyecto en vivo"
                  styleCard={2}
                />
                <Card styleCard={1} />
                <Card styleCard={0} />
              </div>,

              <Card />,
              <Card />,
              <Card />,
            ]}
          />
        </section>
      </div>
      {/* <section className="flex flex-col gap-10">
        {repositories &&
          repositories.map((item, i) => (
            <div className="bg-slate-700" key={i}>
              {JSON.stringify(item)}
            </div>
          ))}
      </section> */}
    </Layout>
  );
};

export default Home;
