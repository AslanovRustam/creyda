import Cases from "./components/Cases/Cases";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Services />
      </Container>
      <Cases />
    </>
  );
}

export default App;
