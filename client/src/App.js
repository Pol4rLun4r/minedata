import './styles/App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';

// navebar
import Nav from './pages/Nav';

// pages
import Home from './pages/Home';
import MineBuilds from './pages/MineBuilds';
import AddBuild from './pages/AddBuild';
import MineFarms from './pages/MineFarms';
import AddFarm from './pages/AddFarm';
import Channels from './pages/Channels';
import AddChannel from './pages/AddChannel';
import Error from './pages/Error';

function App() {

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/minebuilds' element={<MineBuilds />} />
        <Route path='/minebuilds/addbuild' element={<AddBuild />} />
        <Route path='/minefarms' element={<MineFarms />} />
        <Route path='/minefarms/addfarm' element={<AddFarm />} />
        <Route path='/channels' element={<Channels/>} />
        <Route path='/channels/addchannel' element={<AddChannel/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
