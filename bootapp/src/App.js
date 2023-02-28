import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './Components/Navigationbar';
import { CreateAgent } from './Screens/CreateAgent';
import { AgentList } from './Screens/AgentList';
import Home from './Components/Home';
import { Dharamshala } from './Screens/Dharamshala';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/createagent" element={<CreateAgent />} />
    <Route path="/agent-list" element={<AgentList />} />
    <Route path="/createtravel" element={<Dharamshala />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
