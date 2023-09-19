import Blog from "./components/Blog/Blog";
import Cases from "./components/Cases/Cases";
import Contacts from "./components/Contacts/Contacts";
import ContactsFormik from "./components/Contacts/ContactsFormik";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import HaveAProject from "./components/HaveAProject/HaveAProject";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Services />
      </Container>
      <Cases />
      <Container>
        <Technologies />
        <HaveAProject />
        {/* <Contacts /> */}
        <ContactsFormik />
      </Container>
      {/* <Blog /> */}
      <Footer />
    </>
  );
}

export default App;
