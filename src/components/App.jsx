import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import LoadButton from './Button/Button';
import Container from './App.styled';
import { apiRequest } from '../services/api';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [picture, setPicture] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiRequest(name, page)
      .then(res => setPictures(prevPictures => [...prevPictures, ...res.hits]))
      .finally(() => setLoading(false));
  }, [name, page]);

  const closeModal = () => {
    setShowModal(false);
  };

  const formSubmithandler = value => {
    setName(value);
    setPage(1);
    setPictures([]);
  };

  const loadMoreButtonHandler = () => {
    setPage(prevState => page + 1);
  };

  const choiceImageForModalWindow = newPicture => {
    setPicture(newPicture);
    setShowModal(true);
  };

  return (
    <div>
      <ToastContainer autoClose={1000} />

      {showModal && <Modal picture={picture} onClose={closeModal} />}

      <SearchBar onChangeValue={formSubmithandler} />

      {pictures && (
        <ImageGallery pictures={pictures} onClick={choiceImageForModalWindow}>
          <ImageGalleryItem />
        </ImageGallery>
      )}

      <Container>
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          pictures.length > 0 && <LoadButton onClick={loadMoreButtonHandler} />
        )}
      </Container>
    </div>
  );
};
export { App };
