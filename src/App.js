import Cases from "./components/Cases/Cases";
import Container from "./components/Container/Container";
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
      </Container>
    </>
  );
}

export default App;
