import React from 'react'

const Header = () => {
  return (
    <div className="header_container">
      <p className="title">calc</p>
      <div className='containerTheme'>
        <p>THEME</p>
        <div className='switcherTheme'>
          <div className='numberOfTheme'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className='buttonsTheme'>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;