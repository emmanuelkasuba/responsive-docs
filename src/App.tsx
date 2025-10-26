import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar'; // Your standalone NavBar
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Approach from '@/pages/Approach';
import Team from '@/pages/MeetTheTeam';
import Contact from '@/pages/Contact';
import AssignedWork from '@/pages/AssignedWork';
import Register from '@/pages/Register';
import Admin from '@/pages/Admin';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      {/* Use standalone NavBar at the top level */}
      <NavBar />
      
      {/* Layout without navigation, just for structure and footer */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assignedwork" element={<AssignedWork />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;