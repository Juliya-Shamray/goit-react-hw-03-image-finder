import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  targetElement = null;

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.handleToggleModal();
    }
  };
  onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.handleToggleModal();
    }
  };

  render() {
    return (
      <StyledOverlay onClick={this.onBackDropClick}>
        <StyledModal>
          <img src={this.props.modalImage} alt="" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  handleToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
};
