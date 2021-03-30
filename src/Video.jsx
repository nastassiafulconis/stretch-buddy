import React, {useState, useImperativeHandle, forwardRef, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app');

const Video = forwardRef(({name}, ref) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [video,setVideo] = useState('hello');

  const openModal = (videoId) => {
    setVideo(videoId);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useImperativeHandle(ref, () => {
    return {
      openModal: openModal
    };
  });

    return (
      <Fragment>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal" style={customStyles}>
          <button onClick={closeModal} className="close-modal">X</button>
          <h2>{name} Stretch</h2>
          <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video}`}
          allowFullScreen></iframe>
        </Modal>
      </Fragment>
    );
});

export default Video;
