// Node Modules
import styled from "styled-components";

// Local Modules
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import PageProvider from "./Contexts/PageController";

function App() {
   return (
      <PageProvider>
         <Header />

         <div id="Home">
            <Home />
         </div>

         <div id="Sobre">
            <Spacer />
            <About />
         </div>

         <div id="Serviços">
            <Spacer />
            <Services />
         </div>

         <div id="Projetos">
            <Spacer />
            <Projects />
         </div>

         <div id="Contato">
            <Contact />
         </div>

         <Footer />
      </PageProvider>
   );
}

const Spacer = styled.div`
   width: 100%;
   height: 90px;

   @media (max-width: 394px) {
      height: 80px;
   }
   @media (max-height: 630px) {
      height: 70px;
   }
   @media (max-height: 378px) {
      height: 50px;
   }
`;

export default App;
