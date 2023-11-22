import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Beranda from "./components/Beranda";
import MenuBar from "./components/MenuBar";
import Travel from "./components/Travel";
import Tour from './components/Tour';
import Rental from './components/Rental';
import Kontak from './components/Kontak';
import Tentang from './components/Tentang';

function App() {
  
  return (
    <div className="App">
      <header>
        <MenuBar/>
      </header> 
      <body>
        <Element name="beranda">
          <Beranda id="beranda"/>
        </Element>
        <Element name ="travel">
          <Travel id="travel"/>
        </Element>
        <Element name="tour">
          <Tour id="tour"/>
        </Element>
        <Element name="rental">
          <Rental id="rental"/>
        </Element>
        <Element name="kontak">
          <Kontak id="kontak"/>
        </Element>
        <Element name="tentang">
          <Tentang id="tentang"/>
        </Element>
      </body> 
    </div>
  );
}

export default App;
