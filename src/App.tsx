import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <div >
      <Header />
      <div >
        <Home />
      </div>
      <div className='flex flex-row justify-center'>
        <Footer />
      </div>
    </div>
  )
}

export default App
