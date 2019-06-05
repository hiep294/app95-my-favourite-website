import React from 'react'
import Website from './Website'
import WebsiteCtl from '../APIConns/websiteCtl'
import { readWebsites, editWebsite } from '../reduxEls/actions/websiteActions'
import { connect } from 'react-redux'



class Websites extends React.Component {

  state = {
    list: this.props.list
  }

  componentDidMount() {
    WebsiteCtl.read(this.props.readWebsites)
  }

  onEditWebsite = (item) => {
    this.props.editWebsite(item)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list.length !== this.props.list.length) {
      this.setState({
        list: this.props.list
      })
    }
  }


  render() {
    const websites = this.state.list
    return (
      <div className="todos-container">
        {websites.map((item, index) => (
          <Website key={item._id} website={item} index={index} onEditWebsite={this.onEditWebsite} editedWebsite={this.props.editedWebsite} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (bState) => ({
  list: bState.websiteState.list,
  editedWebsite: bState.websiteState.item,
})
const mapDispatchToProps = (dispatch) => ({
  readWebsites: (websites) => dispatch(readWebsites(websites)),
  editWebsite: (website) => dispatch(editWebsite(website))
})

export default connect(mapStateToProps, mapDispatchToProps)(Websites)