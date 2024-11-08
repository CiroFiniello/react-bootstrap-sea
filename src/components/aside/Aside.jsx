import React from "react";
import ukn from "../../assets/ukn.jpg";
import "./aside.scss";

const Aside = ({ Amici }) => {
  return (
    <div className="aside ms-4 p-3">
      <div className="status col-md-12">
        <h2>Online</h2>
      </div>
      <div className="medaglie">
        <h3>Medaglie 4</h3>
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
        <h3>Gruppi 1</h3>
        <div className="gruppo">
          <img src={ukn} alt="ukn" className="imggame mx-2" />
          <span>UKN Network</span>
        </div>
      </div>
      <div className="amici">
        <h3>Amici 10</h3>
        {Amici.slice(0, 5).map((amico) => (
          <div key={amico.id} className="amico d-flex align-items-center">
            <figure>
              <img src={amico.profilepic} alt="amico" className="imggame" />
            </figure>
            <div className="datas">
              <p>{amico.name}</p>
              <p>{amico.status}</p>
              <p>{amico.game}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
