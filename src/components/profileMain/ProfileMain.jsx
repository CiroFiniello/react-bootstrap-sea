import React from "react";
import "./ProfileMain.scss";
import "../../App.scss";

const ProfileMain = ({ avatar, nickname }) => {
  return (
    <div className="">
      <div className="row mx-2">
        <section className="col-md-9 mt-3">
          <div className="box d-flex">
            <figure>
              <img src={avatar} alt="avatar" />
            </figure>
            <div className="userdata ms-4 d-flex justify-content-evenly flex-column">
              <section className="data">
                <h3>{nickname}</h3>
                <p>Nickname</p>
              </section>
              <section className="description">
                <p>Descrizione</p>
              </section>
            </div>
          </div>
        </section>
        <section className="col-md-3 align-content-center">
          <h3>Livello🦍</h3>
          <div className="box-right text-center p-1 m-1 d-flex">
            <span className="align-self-center me-2">🔥</span>
            <div className="  mt-3">
              <p>suriver</p>
              <p>100 ESP</p>
            </div>
          </div>
          <button className="btn-main">Modifica Profilo</button>
        </section>
      </div>
    </div>
  );
};
export default ProfileMain;
