import React from "react";
import ukn from "../../assets/ukn.jpg";
import "./aside.scss";

const Aside = ({ Amici }) => {
  return (
    <div className="aside  p-3">
      <h2 className="status">Online</h2>
      <div className="medals">
        <a href="#">
          Medaglie <span>4</span>
        </a>
        <span>👽❤️🧘‍♂️🤖</span>
      </div>
      <div className="details">
        <a href="#">
          Giochi <span>3</span>
        </a>
        <a href="#">Inventario</a>
        <a href="#">Screenshot</a>
        <a href="#">Video</a>
        <a href="#">Oggetti del Workshop</a>
        <a href="#">Recensioni</a>
        <a href="#">Guide</a>
        <a href="#">Immagini</a>
      </div>
      <div className="groups">
        <a href="#">
          Gruppi <span>1</span>
        </a>
        <div className="group">
          <img src={ukn} alt="ukn" className="img-game me-2" />
          <a href="#" className="d-inline">
            UKN Network
          </a>
        </div>
      </div>
      <div className="friends">
        <a href="#">
          Amici <span>10</span>
        </a>
        {Amici.slice(0, 5).map((amico) => (
          <div key={amico.id} className="friend d-flex align-items-center">
            <figure>
              <img
                src={amico.profilepic}
                alt="amico"
                className="img-game d-flex flex-column justify-content-center h-100"
              />
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
