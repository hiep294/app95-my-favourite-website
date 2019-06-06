class WebsiteCtl {
  static read = (handleSuccess, handleFailedConnection) => {
    fetch('/api/websites', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => handleSuccess(res.good))
      .catch(errs => {
        console.log(errs)
        handleFailedConnection()
      })
  }
  static create = (website, handleSuccess, handleInvalid, handleFailedConnection) => {
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
          handleInvalid(pk.errors)
        }
      })
      .catch(errs => {
        handleFailedConnection()
        console.log(errs)
      })
  }

  static update = (website, handleSuccess, handleInvalid, handleFailedConnection) => {
    fetch(`/api/websites/${website._id}`, {
      method: 'PUT',
      body: JSON.stringify(website),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          handleSuccess()
        } else {
          handleInvalid(res.errors)
        }
      })
      .catch(errs => {
        handleFailedConnection()
        console.log(errs)
      })
  }

  static delete = (_id, handleSuccess, handleInvalid, handleFailedConnection) => {
    fetch(`/api/websites/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          handleSuccess()
        } else {
          handleInvalid()
        }
      })
      .catch(errs => {
        handleFailedConnection()
        console.log(errs)
      })
  }
}

export default WebsiteCtl