import './App.css';
import { GobalStyle } from './GlobalStyles';
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Service from './Service/Service';
import Team from './Team/Team';
import Home from './component/Home_';

import HomePlus from './home2/HomePlus';

import Group from './asset/Group.png'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CardConten from './component/Cardconten';
function App() {
  return (
    <>

      <GobalStyle></GobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/+" element={<HomePlus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
