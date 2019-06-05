import React, { useEffect } from 'react'
import ghimIcon from '../icons/ghim.png'
import editIcon from '../icons/edit.png'
import './Website.css'
import LaunchModalOfDelete from './LaunchModalOfDelete'

export default function Item({ website, index, onEditWebsite, editedWebsite }) {
  const { _id, link, description } = website
  useEffect(() => {
    document.getElementById(`website${_id}`).style.opacity = 1
  })

  const onEdit = () => {
    const item = { _id, link, description, index }
    onEditWebsite(item)
  }

  const ghimStyle = {
    transition: 'opacity 0.5s',
    opacity: _id === editedWebsite._id ? 1 : 0
  }

  return (
    <div id={`website${_id}`} className="todo-card card card-body website">
      <h5 className="card-title flex-style">
        <div><a href={`${link}`} target="_blank" rel="noopener noreferrer">{link}</a> </div>
        <div style={ghimStyle}>
          <img src={ghimIcon} alt="" className="ghim-icon" />
        </div>

      </h5>
      <p className="card-text">{description}</p>

      <div className="flex-style">
        <div></div>
        <div className="icons">
          <LaunchModalOfDelete _id={_id} index={index} />
          <img src={editIcon} alt="" onClick={onEdit} />
        </div>
      </div>

    </div>

  )
}
