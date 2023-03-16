import React, { useContext } from "react";
import ThemeContext from '../context/themeContext';

const Keyboard = ({ updateCalc, deleteLast, resetCalc, throwResult}) => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`keyboard ${theme}`}>
        <button className="keys" onClick={() => updateCalc('7')}>7</button>
        <button className="keys" onClick={() => updateCalc('8')}>8</button>
        <button className="keys" onClick={() => updateCalc('9')}>9</button>
        <button className="keys_delete" onClick={deleteLast}>DEL</button>
        <button className="keys" onClick={() => updateCalc('4')}>4</button>
        <button className="keys" onClick={() => updateCalc('5')}>5</button>
        <button className="keys" onClick={() => updateCalc('6')}>6</button>
        <button className="keys" onClick={() => updateCalc('+')}>+</button>
        <button className="keys" onClick={() => updateCalc('1')}>1</button>
        <button className="keys" onClick={() => updateCalc('2')}>2</button>
        <button className="keys" onClick={() => updateCalc('3')}>3</button>
        <button className="keys" onClick={() => updateCalc('-')}>-</button>
        <button className="keys" onClick={() => updateCalc('.')}>.</button>
        <button className="keys" onClick={() => updateCalc('0')}>0</button>
        <button className="keys" onClick={() => updateCalc('/')}>/</button>
        <button className="keys" onClick={() => updateCalc('*')}>x</button>
        <button className="keys_reset" onClick={resetCalc}>RESET</button>
        <button className="keys_equal" onClick={throwResult}>=</button>
    </div>
  )
}

export default Keyboard;