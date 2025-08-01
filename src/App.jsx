import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <>
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
