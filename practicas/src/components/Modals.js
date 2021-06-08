import React from 'react'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm';
import Modal from './Modal'
import SongSearch from './SongSearch';

const Modals = () => {
  const [ isOpenModal1, openModal1, closeModal1 ] = useModal(false);
  const [ isOpenModal2, openModal2, closeModal2 ] = useModal(false);
  const [ isOpenModal3, openModal3, closeModal3 ] = useModal(false);
  const [ isOpenModal4, openModal4, closeModal4 ] = useModal(false);

  return (
    <div>
      <h2> Modals </h2>
      <button onClick={ openModal1 }>Modal 1</button>
      <Modal isOpen={ isOpenModal1 } closeModal={ closeModal1 }>
        <h3> Modal 1 </h3>
        <p> Hello this is the content of my modal 1 </p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button onClick={ openModal2 }> Modal 2 </button>
      <Modal isOpen={ isOpenModal2 } closeModal={ closeModal2 }>
        <h3> Another modal </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
      <button onClick={ openModal3 }> Modal Contact </button>
      <Modal isOpen={ isOpenModal3 } closeModal={ closeModal3 }>
        <ContactForm/>
      </Modal>
      <button onClick={ openModal4 }> Modal Search Song </button>
      <Modal isOpen={ isOpenModal4 } closeModal={ closeModal4 }>
        <SongSearch/>
      </Modal>
    </div>
  )
}

export default Modals
