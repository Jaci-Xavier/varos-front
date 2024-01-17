import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="mx-[10%]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
