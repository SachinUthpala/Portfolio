import Certificates from "./componets/Certificates/Certificates";
import Experts from "./componets/Experts/Experts";
import Footer from "./componets/Footer/Footer";
import Portfolio from "./componets/Portfolio/Portfolio";
import Works from "./componets/Works/Works";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";

import css from "./styles/app.module.scss"

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experts />
      <Certificates/>
      <Works />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
