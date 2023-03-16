import './styles/styles.scss';
import Calculator from './components/calculator';
import { ThemeProvider } from './context/themeContext'

function App() {
  return (
    <div className='containerAll'>
      <ThemeProvider>
        <Calculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
