import React, { Component } from 'react';
import Modal from './Modal';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../components/videos.json';
import css from './App.module.css';
// import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
import FormRegistration from './FormRegistration/FormRegistration';

class App extends Component {
  state = {
    showModal: false,
    selectedVideo: null,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  // closeModal = () => {
  //   this.setState({showModal: false});
  // }

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  render() {
    const { showModal, selectedVideo } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.toggleModal}
          className={css.openButton}
        >
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal Title</h1>
            {/* <FormLogin
              // closeModal={this.closeModal}
              onClose={this.toggleModal}
              createUser={this.createUser}
            /> */}
            <FormRegistration closeModal={this.closeModal}
              onClose={this.toggleModal}
              createUser={this.createUser}/>
            <button
              type="button"
              onClick={this.toggleModal}
              className={css.closeButton}
            >
              &times;
            </button>
          </Modal>
        )}
        <h2>Selected video: {selectedVideo}</h2>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={selectedVideo} />
      </div>
    );
  }
}

export default App;
