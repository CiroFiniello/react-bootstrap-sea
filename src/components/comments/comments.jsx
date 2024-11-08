import React, { useState } from "react";
import "./comments.scss";
import PropTypes from "prop-types";

const Comments = ({ Amici, Avatar }) => {
  const [newcommento, setNewCommento] = useState("");
  const [friends, setNewFriends] = useState(Amici);

  const onAddComment = () => {
    if (!newcommento) return;
    const newAmiciObj = {
      id: friends.length + 1,
      name: "User",
      commento: newcommento,
      profilepic: Avatar,
    };
    setNewFriends([...friends, newAmiciObj]);
    setNewCommento("");
  };

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
          onChange={(e) => setNewCommento(e.target.value)}
          value={newcommento}
          type="text"
          className="commenta col-md-9 pt-3 me-3"
          placeholder="Aggiungi un commento"
        />
        <button className="btn-main col-md-2" onClick={onAddComment}>
          Pubblica
        </button>

        <section className="data">
          {friends.map((amico) => (
            <div key={amico.id} className="comment row pt-3">
              <figure className="col-md-2 immagine">
                <img
                  src={amico.profilepic}
                  alt={amico.name}
                  className="avatar"
                />
              </figure>
              <article className="col-md-9">
                <h6>{amico.name}</h6>
                <div className="commento">
                  <p>{amico.commento}</p>
                </div>
              </article>
            </div>
          ))}
          <div className="pagination align-items-center d-flex">
            <button>👈</button>
            <p className="mb-0">page</p>
            <button>👉</button>
          </div>
        </section>
      </section>
    </div>
  );
};

Comments.propTypes = {
  Amici: PropTypes.arrayOf(
    PropTypes.shape({
      profilepic: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      commento: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;
