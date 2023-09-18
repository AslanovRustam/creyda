import Container from "../Container/Container";
import InfoContainer from "../InfoContainer/InfoContainer";
import s from "./blog.module.css";
import { blog } from "../../data/data";
import Slider from "../Slider/Slider";

export default function Blog() {
  return (
    <section className={s.container}>
      <Container>
        <div className={s.titles}>
          <InfoContainer text="Blog" />
          <InfoContainer text="All Articles" activeCase />
        </div>
      </Container>
      <div className={s.casesWrapper}>
        <Slider data={blog} slidesPerView="2.3" />
      </div>
    </section>
  );
}
