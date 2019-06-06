import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import warningIcon from '../icons/warning.png'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    const { errors } = this.props
    this.state = {
      modal: true,
      errors
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.onCloseErrorLaunchModel()
  }

  render() {
    const style = {
      width: '20px',
      marginTop: '-3px',
      marginRight: '10px'
    }

    return (
      <>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={true}>
          <ModalHeader toggle={this.toggle}>
            <img src={warningIcon} alt="" style={style} />
            <span style={{ color: "red" }}>Invalid input(s)</span>

          </ModalHeader>
          <ModalBody>
            {this.state.errors.map((error, index) => (
              <h4 key={index}>
                {error}
              </h4>
            ))}


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ModalExample;