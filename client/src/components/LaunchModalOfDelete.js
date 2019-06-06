import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import deleteIcon from '../icons/delete.png'
import warningIcon from '../icons/warning.png'
import { connect } from 'react-redux'
import { deleteWebsite } from '../reduxEls/actions/websiteActions'
import WebsiteItemCtl from '../APIConns/websiteItemCtl'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onDelete = () => {
    const { _id, index } = this.props
    this.toggle()
    this.props.deleteWebsite(index, _id)
  }

  render() {
    const style = {
      width: '20px',
      marginTop: '-3px',
      marginRight: '10px'
    }
    return (
      <>
        <img src={deleteIcon} alt="" onClick={this.toggle} />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={true}>
          <ModalHeader toggle={this.toggle}>
            <img src={warningIcon} alt="" style={style} />
            <span style={{ color: "red" }}>Warning</span>

          </ModalHeader>
          <ModalBody>
            <h4>
              Are you sure to delete this one?
            </h4>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onDelete}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteWebsite: (index, _id) => {
    WebsiteItemCtl.delete(_id, () => {
      // handleSuccess
      dispatch(deleteWebsite(index))
    })
    //config ui
    let ui = document.getElementById(`website${_id}`)
    ui.style.opacity = 0.3
  }
})

export default connect(null, mapDispatchToProps)(ModalExample);