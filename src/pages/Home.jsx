import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import "../styles/global.css";

const Home = () => {
  const [repositories, setrepositories] = useState({});
  const getRepositories = () => {
    fetch("https://api.github.com/users/00rss/repos")
      .then((res) => (res.status == 200 ? res.json() : null))
      .then((data) => {
        console.log(data);
        setrepositories(data);
      });
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <Layout>
      <div className="text-center p-[1rem_2rem]">
        <h1>home</h1>
        <section className="test-grid gap-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
