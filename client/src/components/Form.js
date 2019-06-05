import React from 'react'
import closeIcon from '../icons/close.png'
import saveIcon from '../icons/save.png'
import addIcon from '../icons/add.png'
import { connect } from 'react-redux'
import { createWebsite, closeEditingWebsite, updateWebsite } from '../reduxEls/actions/websiteActions'
import WebsiteCtl from '../APIConns/websiteCtl';
import ErrorsLaunchModel from './ErrorsLaunchModel'

class Form extends React.Component {
  state = {
    link: '',
    description: '',
    onEdit: false,
    errors: { status: false }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.editedItem ? this.onUpdateWebsite() : this.onSubmit()
    }
  }

  onSubmit = () => {
    const { link, description } = this.state
    this.props.createWebsite({ link, description }, this.setState.bind(this))
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onCloseErrorLaunchModel = () => {
    this.setState({ errors: { status: false } })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editedItem !== this.props.editedItem) {
      const { _id, description, link, index } = this.props.editedItem
      this.setState({ _id, description, link, index, onEdit: _id ? true : false })
    }
  }

  onCloseEditingWebsite = () => {
    this.props.closeEditingWebsite()
  }

  onUpdateWebsite = () => {
    //check whether has edited item or not
    if (this.state._id) {
      const { _id, link, description, index } = this.state
      const website = { _id, link, description, index }
      this.props.updateWebsite(website, this.setState.bind(this))
    }
  }

  render() {
    const styleOfEditIcons = {
      transition: 'opacity 0.5s',
      opacity: this.state.onEdit ? 1 : 0.3
    }

    return (
      <div className="todo-form" style={{ position: 'sticky', top: '0px' }}>
        {this.state.errors.status ? <ErrorsLaunchModel info={this.state.errors.info} onCloseErrorLaunchModel={this.onCloseErrorLaunchModel} /> : null}
        <div className="form-group">
          <input name="link" id="todoTitle" placeholder="Link" type="text" className="form-control"
            value={this.state.link || ''}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        <div className="form-group">
          <textarea className="form-control" aria-label="With textarea" placeholder="Description"
            name="description"
            value={this.state.description || ''}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src={addIcon} alt="" width="22px" className="form-icon" onClick={this.onSubmit} />
            <span style={styleOfEditIcons}>
              <img src={saveIcon} alt="" width="22px" className="form-icon" onClick={this.onUpdateWebsite} />
              <img src={closeIcon} alt="" width="22px" className="form-icon" onClick={this.onCloseEditingWebsite} />

            </span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (bState) => ({
  editedItem: bState.websiteState.item
})

// prepare: WebsiteCtl.create, actions(updateWebsiteId, createWebsite)
const mapDispatchToProps = (dispatch) => ({
  createWebsite: (website, setErrors) => {
    WebsiteCtl.create(website, (item) => {
      // handle success
      dispatch(createWebsite(item))
      setTimeout(() => {
        setErrors({ errors: { status: false }, link: '', description: '' })
      }, 0)
    }, (info) => {
      // handling invalid
      setTimeout(() => {
        setErrors({ errors: { status: true, info } })
      }, 0)
    })
  },
  closeEditingWebsite: () => dispatch(closeEditingWebsite()),
  updateWebsite: (website, setErrors) => {
    WebsiteCtl.update(website, () => {
      // handle success
      dispatch(updateWebsite(website))
      setTimeout(() => {
        setErrors({ errors: { status: false }, link: '', description: '' })
      }, 0)
    }, (info) => {
      // handling invalid
      console.log(info)
      setTimeout(() => {
        setErrors({ errors: { status: true, info } })
      }, 0)
    })

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
