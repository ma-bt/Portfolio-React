import logo from './logo.svg';
import './App.css';
import NavBar from './comp/NavBar';
import Banner from './comp/Banner';
import Skills from './comp/Skills';
import Projects from './comp/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './comp/Contact';
import { Footer } from './comp/Footer';


function App() {
  return (
    <>
      < NavBar />
      < Banner />
      < Skills />
      < Projects />
      < Contact />
      <Footer />
    </>

  );
}

export default App;
