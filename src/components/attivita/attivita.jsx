import React from "react";

import "./attivita.scss";

const Attivita = () => {
  return (
    <div className="activites">
      <div className="  d-flex justify-content-between title mb-3 p-3 align-items-center ">
        <h4 className="m-0">Attività recente</h4>
        <p className="m-0"> 0.7 ore nelle ultime 2 settimane</p>
      </div>
      <div className="p-3">
        <section className="game  p-3">
          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-start pt-2">
              <div className="bg-image csgo"></div>
              <h6 className="m-3">Counter-Strike 2</h6>
            </div>
            <div className="pt-2">
              <p className="m-0 text-end"> 150 ore in totale</p>
              <p className="m-0 text-end"> Ultimo avvio: 25 ott</p>
            </div>
          </div>
          <div className="d-flex under-game mt-2 p-3 align-items-center">
            <a href="#" className=" me-2 ">
              Achivment
              <span> 1 di 1</span>
            </a>

            <div className="barra"></div>
            <span className="">⚔️</span>
          </div>
        </section>
      </div>
      <div className="p-3">
        <section className="game  p-3">
          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-start pt-2">
              <div className="bg-image rust"></div>
              <h6 className="m-3">Rust</h6>
            </div>
            <div className="pt-2">
              <p className="m-0 text-end"> 150 ore in totale</p>
              <p className="m-0 text-end"> Ultimo avvio: 25 ott</p>
            </div>
          </div>
          <div className="d-flex under-game mt-2 p-3 align-items-center">
            <a href="#" className=" me-2 ">
              Achivment
              <span> 1 di 1</span>
            </a>

            <div className="barra"></div>
            <span className="">⚔️</span>
          </div>
        </section>
      </div>
      <div className="p-3">
        <section className="game  p-3 ">
          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex align-items-start pt-2">
              <div className="bg-image payday"></div>
              <h6 className="m-3">Pay Day 3</h6>
            </div>
            <div className="pt-2">
              <p className="m-0 text-end"> 150 ore in totale</p>
              <p className="m-0 text-end"> Ultimo avvio: 25 ott</p>
            </div>
          </div>
          <div className="d-flex under-game mt-2 p-3 align-items-center">
            <a href="#" className=" me-2 ">
              Achivment
              <span> 1 di 1</span>
            </a>

            <div className="barra"></div>
            <span className="">⚔️</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Attivita;
