import ReactDOM from 'react-dom';
import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.container}>
      Modal
      <button className={styles.btn} onClick={onClose}>
        x
      </button>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
