import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Navbar from './Component/Navbar.jsx';
import Error from './Pages/Error.jsx';
import Request from './Pages/Request.jsx';
import UserDetail from './Component/UserDetail.jsx';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/request" element={<Request />} />
           <Route path="/about" element={<About />} />
           <Route path="/:username" element={<UserDetail />} />
           <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default App;