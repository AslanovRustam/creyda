import Cases from "./components/Cases/Cases";
import ContactsFormik from "./components/Contacts/ContactsFormik";
import Container from "./components/Container/Container";
import Cookies from "./components/Coolies/Cookies";
import Footer from "./components/Footer/Footer";
import HaveAProject from "./components/HaveAProject/HaveAProject";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <>
      <Container>
        <Cookies />
        <Header />
        <Hero />
        <Services />
      </Container>
      <Cases />
      <Container>
        <Technologies />
        <Team />
        <HaveAProject />
        <ContactsFormik />
      </Container>
      <Footer />
    </>
  );
}

export default App;
