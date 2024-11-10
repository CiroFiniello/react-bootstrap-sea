import React, { useState } from "react";
import "./comments.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="comments">
      <section className="d-flex justify-content-between title p-3 align-items-center mt-3">
        <div>
          <h6>Commenti</h6>
          <a href="#">Mostra tutti i commenti</a>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Segui discussione
          </label>
        </div>
      </section>
      <div className="p-3">
        <section className="input d-flex mt-3 mx-1 p-3 align-items-center">
          <div className="input-group p-0 me-2">
            <input
              onChange={(e) => setNewCommento(e.target.value)}
              value={newcommento}
              type="text"
              placeholder="Aggiungi un commento"
              className="form-control "
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button className="btn-main px-3 py-2" onClick={onAddComment}>
            Pubblica
          </button>
        </section>
      </div>
      <div className="px-3">
        <section className=" mx-1 px-3">
          {currentComments.map((amico) => (
            <div key={amico.id} className="comment row pt-3">
              <div
                className="image col-md-2"
                style={{
                  backgroundImage: `url(${amico.profilepic})`,
                }}
              ></div>
              <article className="col-md-9">
                <h6>{amico.name}</h6>
                <div className="commento">
                  <p className="m-0">{amico.commento}</p>
                </div>
              </article>
            </div>
          ))}
          <div className="mt-3 pagination align-self-center justify-content-center d-flex pb-5">
            <button
              className="btn-pagination"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className="mx-2 mb-0">Page {currentPage}</p>
            <button
              className="btn-pagination"
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(friends.length / commentsPerPage)
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </section>
      </div>
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
