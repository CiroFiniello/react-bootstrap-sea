import React, { useState } from "react";
import "./comments.scss";
import PropTypes from "prop-types";

const Comments = ({ Amici, Avatar, visitatore, visitatorename }) => {
  const [newcommento, setNewCommento] = useState("");
  const [friends, setNewFriends] = useState(Amici);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const onAddComment = () => {
    if (!newcommento) return;
    const newAmiciObj = {
      id: friends.length + 1,
      name: visitatorename,
      commento: newcommento,
      profilepic: visitatore,
    };
    setNewFriends([...friends, newAmiciObj]);
    setNewCommento("");
  };

  // Calcola l'indice dei commenti da mostrare sulla pagina corrente
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = friends.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // Funzioni di cambio pagina
  const nextPage = () => {
    if (currentPage < Math.ceil(friends.length / commentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="comments pt-2">
      <section className="title mt-3">
        <div className="box  mt-3">
          <h6>Commenti</h6>
          <p>Mostra tutti i commenti</p>
        </div>
        <div className="box align-content-center gap-1">
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
      </section>

      <section className="dati mx-1 px-3">
        {currentComments.map((amico) => (
          <div key={amico.id} className="comment row pt-3">
            <figure className=" immagine">
              <img src={amico.profilepic} alt={amico.name} className="avatar" />
            </figure>
            <article className="">
              <h6>{amico.name}</h6>
              <div className="commento">
                <p>{amico.commento}</p>
              </div>
            </article>
          </div>
        ))}
        <div className="pagination align-items-center d-flex">
          <button onClick={prevPage} disabled={currentPage === 1}>
            👈
          </button>
          <p className="mb-0">Page {currentPage}</p>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(friends.length / commentsPerPage)
            }
          >
            👉
          </button>
        </div>
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
  Avatar: PropTypes.string.isRequired,
};

export default Comments;
