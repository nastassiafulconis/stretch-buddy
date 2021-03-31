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
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    borderRadius: '20px',
    boxShadow: '0.5px 0.5px 5px gray'
  }
};

Modal.setAppElement('#app');

const Video = forwardRef(({name}, ref) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [video,setVideo] = useState('hello');
  const [title,setTitle] = useState('testing');

  const openModal = (videoId, name) => {
    setVideo(videoId);
    setTitle(name);
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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Video" style={customStyles} portalClassName="modal">
          <button onClick={closeModal} className="close-modal">X</button>
          <h2>{title}</h2>
          <iframe
          width='100%'
          height='80%'
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video}`}
          allowFullScreen></iframe>
        </Modal>
      </Fragment>
    );
});

export default Video;
