import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Portfolio from '../components/Portfolio.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <Portfolio/>
        <About/>
        <Footer/>
    </>
  )
}

export default Home