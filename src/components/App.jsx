import React, { Component } from 'react';

import Modal from './Modal';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../components/videos.json';
import css from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
    selectedVideo: null,
  };
  componentDidMount() {
    // console.log('Mount App Component');
  }

  componentDidUpdate() {
    // console.log('Update App Component');
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { showModal, selectedVideo } = this.state;    

    return (
      <div>
  
        <button type="button" onClick={this.toggleModal } className={css.openButton}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              veritatis accusamus fuga illo, vel deserunt dolorum nihil ut
              ratione ipsa perspiciatis, in alias blanditiis iure? Voluptate
              alias eos repudiandae beatae!
            </p>
            <button type="button" onClick={this.toggleModal} className={css.closeButton}>
              Close Modal
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
