import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './Components/Navigationbar';
import { CreateAgent } from './Screens/CreateAgent';
import { AgentList } from './Screens/AgentList';
import Home from './Components/Home';
import { Dharamshala } from './Screens/Dharamshala';
import Footer from './Components/Footer';
import { Hotel } from './Screens/Hotel';
import { HomeStay } from './Screens/HomeStay';
import ScrollButton from './Components/ScrollButton';
import BestTiming from './Screens/BestTiming';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createagent" element={<CreateAgent />} />
          <Route path="/agent-list" element={<AgentList />} />
          <Route path="/dharamshala" element={<Dharamshala />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/homestay" element={<HomeStay />} />
          <Route path="/best-timing" element={<BestTiming />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </BrowserRouter>
    </>
  );
}

export default App;
