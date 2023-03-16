import {createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  
  const defaultTheme = 'theme-1'
  const [theme, setTheme] = useState(defaultTheme)
  

  const handleTheme = (changeTheme) => {
    if(changeTheme === 'theme-1') {
      setTheme('theme-1')
      // console.log('entre a theme 1')
    }

    else if(changeTheme === 'theme-2') {
      setTheme('theme-2')
      // console.log('entre a theme 2')

    }

    else if(changeTheme === 'theme-3') {
      setTheme('theme-3')
      // console.log('entre a theme 3')
    }
  }

  const data = { theme, handleTheme }


  return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
  )
}

export { ThemeProvider }

export default ThemeContext;