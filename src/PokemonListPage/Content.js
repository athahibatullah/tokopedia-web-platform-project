import React from 'react'
import './Content.css'
import searchLogo from '../search.png'

export const Content = () =>  {
  return (
      <div className="containerContent">
          <input type="text" placeholder="Search"></input>
          <button>My Pokemon List</button>
      </div>
  )
}