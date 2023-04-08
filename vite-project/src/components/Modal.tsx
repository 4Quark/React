import React from 'react';
import { ICharacter } from '../servises/types';
import '../styles/Search.css';

type ModalProps = {
  modalCharacter: ICharacter;
  modalEpisodes: string;
  closeModal: () => void;
};

const Modal = ({ modalCharacter, modalEpisodes, closeModal }: ModalProps) => {
  return (
    <div className="modal_container" onClick={(e) => e.currentTarget === e.target && closeModal()}>
      <div className="modal_wrapper">
        <div className="modal_window">
          <div className="close" onClick={() => closeModal()}>
            ✖
          </div>
          <div className="modal_info">
            <div className="modal_main_info">
              <h2>{modalCharacter.name}</h2>
              <div className="modal_picture">
                <img className="modal_img" src={modalCharacter.image} />
              </div>
            </div>
            <div className="modal_additional_info">
              <h5 className="card_subheader">Species: {modalCharacter.species}</h5>
              <div className="card_text">Gender: {modalCharacter.gender}</div>
              {modalCharacter.type ? (
                <div className="card_text">Type: {modalCharacter.type}</div>
              ) : (
                <div className="card_text">No type</div>
              )}
              <div className="card_text">Status: {modalCharacter.status}</div>
              <div className="card_text">Location: {modalCharacter.location.name}</div>
              <div className="card_text">Origin: {modalCharacter.origin.name}</div>
              <div className="card_text">Episode(s): {modalEpisodes}</div>
              <div className="card_text">url: {modalCharacter.url}</div>
              <div className="card_text">created: {modalCharacter.created}</div>
            </div>
          </div>
          <button className="card_btn" onClick={() => closeModal()}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
