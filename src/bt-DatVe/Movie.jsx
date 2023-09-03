import React from "react";
import ListItem from "./ListItem";
import Booking from "./Booking";
import data from "./data.json";

export default function Movie() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(./img/bgmovie.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      ></div>
      <div className="overlay">
        <div className="container">
          <h1 className="text-center text-warning fw-bold mb-5">
            Đặt vé xim phim CyberLearn.vn
          </h1>
          <div className="row">
            <div className="col-md-8">
              <ListItem seats={data} />
            </div>
            <div className="col-md-4">
              <Booking />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
