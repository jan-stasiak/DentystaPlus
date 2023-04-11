import React from "react";
import { Link } from "react-router-dom";
import CSS from 'csstype';

import Background from "../../assets/background.jpg";

const backgroundStyle: CSS.Properties = {
    backgroundImage: `url(${Background})`
};

export const Aboutus = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-cover" style={backgroundStyle}>
  <div className="bg-gray-500 bg-opacity-50 rounded-lg p-10 shadow-lg ">
    <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      Program, który polubisz od pierwszego kliknięcia
    </h1>
    <div className="text-lg text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <p>
        Nasza platforma to gwarancja bezpieczeństwa i poufności Twoich danych medycznych.
      </p>
      <p>
        Oferujemy elektroniczną historię leczenia oraz monitorowanie postępów Twojego zdrowia.
      </p>
    </div>
  </div>
</div>

    );
};

export default Aboutus;