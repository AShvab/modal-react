import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
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

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
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
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
