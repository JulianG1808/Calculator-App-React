import React, { useState } from 'react'

const Calculator = () => {

  const [calc, setCalc] = useState("")

  const operators = ['/' ,'*', '+', '-', '.']

  const updateCalc = (value) => {
    console.log(calc)

    if(
      operators.includes(value) && calc == "" || 
      operators.includes(value) && operators.includes(calc.slice(-1)) 
      ) {
      return
    }

    if(value === "0" && calc == "" || calc == "0") {
      return
    }

    setCalc(calc + value)
  }

  const throwResult = () => { 
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if(calc == '') return;

    const value = calc.slice(0, -1)

    setCalc(value)
  }

  const resetCalc = () => {
    if(calc == '') return

    setCalc("")
  }

  return (
    <div className="calculator_calcBox">
      <div className="calculator_header">
        <p className="calculator_title">calc</p>
        <div className="calculator_theme">THEME</div>
      </div>
      <div className="calculator_screen">
        <div className="calculator_input">{calc || "0"}</div>
      </div>
      <div className="calculator_keyboard">
        <button className="calculator_keys" onClick={() => updateCalc('7')}>7</button>
        <button className="calculator_keys" onClick={() => updateCalc('8')}>8</button>
        <button className="calculator_keys" onClick={() => updateCalc('9')}>9</button>
        <button className="calculator_keyDel" onClick={deleteLast}>DEL</button>
        <button className="calculator_keys" onClick={() => updateCalc('4')}>4</button>
        <button className="calculator_keys" onClick={() => updateCalc('5')}>5</button>
        <button className="calculator_keys" onClick={() => updateCalc('6')}>6</button>
        <button className="calculator_keys" onClick={() => updateCalc('+')}>+</button>
        <button className="calculator_keys" onClick={() => updateCalc('1')}>1</button>
        <button className="calculator_keys" onClick={() => updateCalc('2')}>2</button>
        <button className="calculator_keys" onClick={() => updateCalc('3')}>3</button>
        <button className="calculator_keys" onClick={() => updateCalc('-')}>-</button>
        <button className="calculator_keys" onClick={() => updateCalc('.')}>.</button>
        <button className="calculator_keys" onClick={() => updateCalc('0')}>0</button>
        <button className="calculator_keys" onClick={() => updateCalc('/')}>/</button>
        <button className="calculator_keys" onClick={() => updateCalc('*')}>x</button>
        <button className="calculator_keyReset" onClick={resetCalc}>RESET</button>
        <button className="calculator_keyEqual" onClick={throwResult}>=</button>
        
      </div>
    </div>
  )
}

export default Calculator;