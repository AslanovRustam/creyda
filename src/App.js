import { useTranslation, Trans } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Cookies t={t} />
        <Header t={t} />
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
