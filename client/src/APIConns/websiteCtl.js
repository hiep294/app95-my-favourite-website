class WebsiteCtl {
  static read = (dispatch) => {
    fetch('/api/websites', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(websites => dispatch(websites))
      .catch(errs => console.log(errs))
  }
  static create = (website, handleSuccess, handleInvalid) => {
    fetch('/api/websites', {
      method: 'POST',
      body: JSON.stringify(website),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(pk => {
        if (pk.success) {
          handleSuccess(pk.item)
          // console.log(pk.item)
        } else {
          handleInvalid(pk.info)
        }
      })
      .catch(errs => console.log(errs))
  }

  static update = (website, handleSuccess, handleInvalid) => {
    fetch(`/api/websites/${website._id}`, {
      method: 'PUT',
      body: JSON.stringify(website),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          handleSuccess()
        } else {
          handleInvalid(data.info)
        }
      })
      .catch(errs => console.log(errs))
  }

  static delete = (_id, handleSuccess) => {
    fetch(`/api/websites/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          handleSuccess()
        }
      })
      .catch(errs => console.log(errs))
  }
}

export default WebsiteCtl