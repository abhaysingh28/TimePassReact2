import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleImage = ({ MyData }) => {
  console.log(MyData);
  // const { id } = useParams();
  // useEffect(() => {
  //   data1();
  // }, []);

  // const data1 = async () => {
  //   const { data } = await axios(`https://picsum.photos/id/${id}/info`);
  //   setMyData(data);
  // };
  return (
    <>
      <div className="hero">
        <div className="highway"></div>
        <div className="city">
          <img src={MyData.download_url} alt="" />
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
    </>
  );
};

export default SingleImage;
