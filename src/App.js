import React, { useEffect, useState } from "react";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleImage from "./Components/SingleImage";
import axios from "axios";

const App = () => {
  const [MyData, setMyData] = useState({});
  const [PicD, setPicD] = useState();
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    setTimeout(() => {
    PicData();
    }, 1100);
  }, []);
  
  const PicData = async () => {
    setLoader(true);
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=2&limit=100`
    );
    setPicD(data);
    setLoader(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main setMyData={setMyData} PicD={PicD} setPicD={setPicD} loader={loader} />
            }
          />
          <Route path="/images/:id" element={<SingleImage MyData={MyData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
