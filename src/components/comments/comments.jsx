import React from "react";
import "./comments.scss";
import csgo from "../../assets/csgo.webp";

const Comments = () => {
  return (
    <div className="comments pt-2">
      <section className="title row mt-3">
        <div className="box col-md-6 mt-3">
          <h6>Commenti</h6>
          <p>Mostra tutti i commenti</p>
        </div>
        <div className="box col-md-6 align-content-center gap-1">
          <input type="checkbox" />
          <span className="ms-2">segui discussione</span>
        </div>
      </section>
      <section className="input row mt-3 mx-1 p-3">
        <input
          type="text"
          className="commenta col-md-9 pt-3 me-3"
          placeholder="Aggiungi un commento"
        />
        <button className="btn-main col-md-2">Pubblica</button>

        <section className="data">
          <div className="comment row pt-3">
            <figure className="col-md-2 immagine">
              <img src={csgo} alt="img" className="avatar" />
            </figure>
            <article className="col-md-9">
              <h6>Friend</h6>
              <div className="commento">
                <p>questo è il commento</p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Comments;
