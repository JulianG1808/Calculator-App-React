import React, { useState } from 'react'
import Header from './header'
import Screen from './screen'
import Keyboard from './keyboard'

const Calculator = () => {

  const [calc, setCalc] = useState("")

  const operators = ['/' ,'*', '+', '-', '.']

  const updateCalc = (value) => {
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
    <div className="calculator_calcBox" id="Theme1">
      <Header />
      <Screen calc={calc}/>
      <Keyboard updateCalc={updateCalc} throwResult={throwResult} resetCalc={resetCalc} deleteLast={deleteLast} />
    </div>
  )
}

export default Calculator;