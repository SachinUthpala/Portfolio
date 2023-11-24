import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import css from "./styles/app.module.scss"

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
  </div>;
};

export default App;
