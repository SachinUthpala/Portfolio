import Experts from "./componets/Experts/Experts";
import Works from "./componets/Works/Works";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import css from "./styles/app.module.scss"

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
   <Experts/>
   <Works/>
  </div>;
};

export default App;
