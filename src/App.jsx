import './styles.css'
import Connect from './pages/Connect.jsx'
import Results from './pages/Results.jsx'
import Insights from './pages/Insights.jsx'
import Analyzing from './pages/Analyzing.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/results" element={<Results />} />
        <Route path="/analyzing" element={<Analyzing/>} />
        <Route path="/insights" element={<Insights />} />
      </Routes>

      
    </>
    </BrowserRouter>
  );
}

export default App;
