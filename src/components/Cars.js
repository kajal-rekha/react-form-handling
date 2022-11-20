import React from "react";
import "./car.css";

const Cars = () => {
  const isDrive = false;

  const porchStyle = {
    color: isDrive ? "blue" : "white",
    backgroundColor: "deeppink",
    fontSize: "3rem",
  };
  return (
    <div className="cars-wrapper">
      <h1 className="car" style={porchStyle}>
        Porche
      </h1>
      <h1 className="car">Lamborghini</h1>
      <h1 className="car">Ferrari</h1>
      <h1 className="car">Audi</h1>
      <h1 className="car">McLaren</h1>
    </div>
  );
};

export default Cars;
