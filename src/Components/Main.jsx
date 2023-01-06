import axios from "axios";
import React, { useEffect, useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import hui from "./hui.gif";

const Main = ({ setMyData, PicD, loader }) => {
  const navigate = useNavigate();

  const handlePage = (e) => {
    navigate(`/images/${e.id}`);
    setMyData(e);
  };
  return (
    <>
      {loader ? (
        <div className="loader">
          <img src={hui} />
        </div>
      ) : (
        PicD?.map((e, i) => (
          <div key={i} onClick={() => handlePage(e)} className="hero">
            <div className="highway"></div>
            <div className="city">
              <img src={e.download_url} alt="" />
            </div>
            <div className="flower"></div>

            <div className="car">
              <img src="https://www.aartiinformatics.com/wp-content/uploads/2014/09/new-sports-car.png" />
            </div>
            <div className="wheel">
              <img
                src="https://pngimg.com/uploads/car_wheel/car_wheel_PNG23306.png"
                className="back-wheel"
              />
              <img
                src="https://pngimg.com/uploads/car_wheel/car_wheel_PNG23306.png"
                className="front-wheel"
              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Main;
