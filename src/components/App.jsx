import React, { Component } from 'react';
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

class App extends Component {
  state = {
    pictures: [],
    picture: null,
    page: 1,
    showModal: false,
    name: null,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ loading: true });
      apiRequest(nextName, nextPage)
        .then(res =>
          this.setState(prevState => {
            return { pictures: [...prevState.pictures, ...res.hits] };
          })
        )
        .finally(() => this.setState({ loading: false }));
      // .then(data => this.setState({ pictures: data.hits }));
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  formSubmithandler = value => {
    this.setState({
      name: value,
      page: 1,
      pictures: [],
    });
  };

  loadMoreButtonHandler = () => {
    // console.log('нажатие на load more');
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  choiceImageForModalWindow = newPicture => {
    // console.log('newPicture', newPicture);
    this.setState({ picture: newPicture, showModal: true });
  };

  render() {
    const { loading, pictures, showModal, picture } = this.state;

    return (
      <div>
        <ToastContainer autoClose={1000} />

        {showModal && <Modal picture={picture} onClose={this.closeModal} />}

        <SearchBar onChangeValue={this.formSubmithandler} />

        {pictures && (
          <ImageGallery
            pictures={pictures}
            onClick={this.choiceImageForModalWindow}
          >
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
            pictures.length > 0 && (
              <LoadButton onClick={this.loadMoreButtonHandler} />
            )
          )}
        </Container>
      </div>
    );
  }
}
export { App };
