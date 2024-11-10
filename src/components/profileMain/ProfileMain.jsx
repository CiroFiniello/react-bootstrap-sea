import React, { useState, useEffect } from "react";
import "./ProfileMain.scss";
import "../../App.scss";
import gatto from "../../assets/gatto.jpg";

const ProfileMain = ({ avatar, nickname }) => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const x = Math.floor(Math.random() * (100 - 1 + 1));
    setRandomNumber(x);
  }, []);

  return (
    <div className="row mx-2">
      <section className="col-md-9 mt-3">
        <div className="container-userdata d-flex">
          <figure>
            <img src={avatar} alt="avatar" />
          </figure>
          <div className="userdata ms-4 d-flex justify-content-evenly flex-column">
            <section className="data">
              <h3>{nickname}</h3>
              <p>Alberto 🏳️‍🌈 from TheMoon!!!</p>
            </section>
            <section className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem culpa alias consequatur quidem veniam vero dolor rem
                odio mollitia.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="container-level col-md-3 align-content-center">
        <h3 className="d-flex align-items-center">
          Livello <span className="level-number d-block">{randomNumber}</span>
        </h3>
        <div className="box-right p-2 m-1 d-flex align-items-center">
          <span className="align-self-center me-2"></span>
          <div className="ps-2 ">
            <p className="m-0">Barely surviving</p>
            <p className="m-0">100 ESP</p>
          </div>
        </div>
        <button className="btn-main ms-1 px-3">Modifica Profilo</button>
      </section>
    </div>
  );
};

export default ProfileMain;
