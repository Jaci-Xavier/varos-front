import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="desktop:mx-[10%] tablet:mx-2">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
