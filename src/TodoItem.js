import React from 'react'


export default function TodoItem({title, id, completed}) {
  return (
    <li className="todo">
      <div className="alert alert-dismissible alert-primary">
          <button type="button" className="close" data-dismiss="alert">&times;</button>
          <label>
            <input
              type="checkbox"
              checked={completed}
            />
            <span>{title}</span>
          </label>
      </div>
    </li>
  )
}
