import React, { useContext } from 'react'
import ThemeContext from '../context/themeContext';

const Header = () => {

  const {theme, handleTheme } = useContext(ThemeContext)

  return (
    <div className={`header ${theme}`}>
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
            <button onClick={() => handleTheme('theme-1')}></button>
            <button onClick={() => handleTheme('theme-2')}></button>
            <button onClick={() => handleTheme('theme-3')}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;