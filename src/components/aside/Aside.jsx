import React from "react";
import ukn from "../../assets/ukn.jpg";
import "./aside.scss";

const Aside = () => {
  return (
    <div className="aside ms-4 p-3">
      <div className="status col-md-12">
        <h2>Online</h2>
      </div>
      <div className="medaglie">
        <h3>Medaglie</h3>
        <span>👽❤️🧘‍♂️🤖</span>
      </div>
      <div className="dettagli">
        <p>Giochi 3</p>
        <p>Inventario</p>
        <p>Screenshot</p>
        <p>Video</p>
        <p>Oggetti del Workshop</p>
        <p>Recensioni</p>
        <p>Guide</p>
        <p>Immagini</p>
      </div>
      <div className="gruppi">
        <h3>Gruppi</h3>
        <div className="gruppo">
          <img src={ukn} alt="ukn" className="imggame mx-2" />
          <span>UKN Network</span>
        </div>
      </div>
      <div className="amici">
        <h3>Amici</h3>
        <div className="amico d-flex align-items-center">
          <figure>
            <img src={ukn} alt="amico" className="imggame" />
          </figure>
          <div className="datas">
            <p>Nome</p>
            <p>Stato</p>
            <p>Gioco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
