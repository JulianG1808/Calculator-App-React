

const Calculator = () => {
  return (
    <div className="calculator_calcBox">
      <div className="calculator_header">
        <p className="calculator_title">calc</p>
        <div className="calculator_theme">THEME</div>
      </div>
      <div className="calculator_result"></div>
      <div className="calculator_keyboard">
        <div className="calculator_keys">7</div>
        <div className="calculator_keys">8</div>
        <div className="calculator_keys">9</div>
        <div className="calculator_keyDel">DEL</div>
        <div className="calculator_keys">4</div>
        <div className="calculator_keys">5</div>
        <div className="calculator_keys">6</div>
        <div className="calculator_keys">+</div>
        <div className="calculator_keys">3</div>
        <div className="calculator_keys">2</div>
        <div className="calculator_keys">1</div>
        <div className="calculator_keys">-</div>
        <div className="calculator_keys">.</div>
        <div className="calculator_keys">0</div>
        <div className="calculator_keys">/</div>
        <div className="calculator_keys">x</div>
        <div className="calculator_keyReset">RESET</div>
        <div className="calculator_keyEqual">=</div>
        
      </div>
    </div>
  )
}

export default Calculator;