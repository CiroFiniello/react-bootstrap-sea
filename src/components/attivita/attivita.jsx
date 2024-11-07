import React from "react";
import csgo from "../../assets/csgo.webp";
import rust from "../../assets/rust.webp";
import payday from "../../assets/payday.webp";
import "./attivita.scss";

const Attivita = () => {
  return (
    <div className="row">
      <div className="attivita ms-3">
        <section className="">
          <div className="row title mb-3 pt-2 ">
            <h4 className="col-9">Attività recente</h4>
            <p className="col-3"> 0.7 ore nelle ultime 2 settimane</p>
          </div>
          <section className="row game">
            <div className="bg-black col-md-9 d-flex align-items-start pt-2">
              <figure>
                <img src={csgo} alt="csgo" className="games" />
              </figure>
              <h6 className="m-3">Counter-Strike 2</h6>
            </div>
            <div className="bg-black box col-md-3 pt-2">
              <p> 150 ore in totale</p>
              <p> Ultimo avvio: 25 ott</p>
            </div>
            <div className="row under-game mt-2 ">
              <h6 className="col-md-1 me-4 ">Achivment</h6>
              <span className="col-md-1">1 di 1</span>
              <span className="col-md-4 align-content-center">
                <div className="barra"></div>
              </span>
              <span className="col-5">⚔️</span>
            </div>
          </section>
          <section className="row game">
            <div className="bg-black col-md-9 d-flex align-items-start pt-2">
              <figure>
                <img src={rust} alt="csgo" className="games" />
              </figure>
              <h6 className="m-3">Rust</h6>
            </div>
            <div className="bg-black box col-md-3 pt-2">
              <p> 2650 ore in totale</p>
              <p> Ultimo avvio: 22 ott</p>
            </div>
            <div className="row under-game mt-2 ">
              <h6 className="col-md-1 me-4 ">Achivment</h6>
              <span className="col-md-1">1 di 1</span>
              <span className="col-md-4 align-content-center">
                <div className="barra"></div>
              </span>
              <span className="col-5">⚔️</span>
            </div>
          </section>
          <section className="row game">
            <div className="bg-black col-md-9 d-flex align-items-start pt-2">
              <figure>
                <img src={payday} alt="csgo" className="games" />
              </figure>
              <h6 className="m-3">Pay Day 3</h6>
            </div>
            <div className="bg-black box col-md-3 pt-2">
              <p> 10 ore in totale</p>
              <p> Ultimo avvio: 25 ott</p>
            </div>
            <div className="row under-game mt-2 ">
              <h6 className="col-md-1 me-4 ">Achivment</h6>
              <span className="col-md-1">1 di 1</span>
              <span className="col-md-4 align-content-center">
                <div className="barra"></div>
              </span>
              <span className="col-5">⚔️</span>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default Attivita;
