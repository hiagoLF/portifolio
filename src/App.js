// Node Modules
import styled from 'styled-components'

// Local Modules
import './App.css'
import Footer from './Components/Footer';
import Header from "./Components/Header";
import NextPageButton from './Components/NextPageButton';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import PageProvider from './Contexts/PageController';


function App() {
  return (
    <PageProvider>
      {/* <NextPageButton /> */}

      <Header />

      <div id='Home'>
        <Home />
      </div>

      <div id='Sobre'>
        <Spacer />
        <About />
      </div>

      <div id='Serviços'>
        <Spacer />
        <Services />
      </div>

      <div id='Projetos'>
        <Spacer />
        <Projects />
      </div>

      <div id='Contato'>
        {/* <Spacer /> */}
        <Contact />
      </div>

      <Footer />
    </PageProvider>
  );
}

const Spacer = styled.div`
  width: 100%;
  height: 45px;
`;

export default App;
