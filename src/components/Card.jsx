import React, { useState } from "react";

const Card = ({
  title,
  description,
  link,
  icon = "",
  linkLegend,
  styleCard = 2,
}) => {
  const [style, setStyle] = useState("");
  useState(() => {
    let aux = "";
    switch (styleCard) {
      case 0:
        aux = "bg-gradient-to-r from-gray-900 via-gray-900 to-[rgb(13_20_36)] ";
        break;
      case 1:
        aux = "bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 ";
        break;
      case 2:
        aux = "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900";
        break;
    }
    setStyle(aux);
  }, []);
  return (
    <div
      className={
        style +
        "min-h-[150px] p-1 rounded-md shadow-[0px_0px_20px_2px_rgba(255,255,255,0.3)] hover:scale-[1.01] duration-200 ease-in-out"
      }
    >
      <section className="border-b-2 mb-3 text-slate-300">
        <h1 className="text-2xl italic font-bold">{title}</h1>
      </section>
      <section className="text-slate-400 text-left m-auto w-[95%] break-words">
        <p>{description}</p>
      </section>
      <a
        href={link}
        className="flex flex-row justify-center items-center gap-6"
      >
        <span>{linkLegend}</span>
        <img className="h-20 w-20" alt="proy_icon" src={icon} />
      </a>
    </div>
  );
};

export default Card;
