import { createRef, useState } from 'react';
import Modal from './components/modal';
import styles from './styles/App.module.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rootRef = createRef();

  const openModal = () => {
    setIsModalOpen(true);
    document.getElementById('root').style.filter = 'opacity(50%)';
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.getElementById('root').style.filter = 'opacity(100%)';
    document.body.style.overflow = 'unset';
  };

  const handleClick = (e) => {
    if (rootRef.current.contains(e.target) && isModalOpen) {
      closeModal();
    }
  };

  return (
    <div className={styles.container} ref={rootRef} onClick={handleClick}>
      <button className={styles.btn} onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div>What is Lorem Ipsum?</div>
    </div>
  );
};

export default App;
