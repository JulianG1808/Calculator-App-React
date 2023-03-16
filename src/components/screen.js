import React, {useContext} from "react";
import ThemeContext from '../context/themeContext'


const Screen = ({ calc }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`screen ${theme}`}>
        <p className="display" type="text" maxLength="5">{calc || "0"}</p>
    </section>
  )
}

export default Screen;