import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Navbar from './Component/Navbar.jsx';
import Error from './Pages/Error.jsx';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="*" element={<Error />} />

        </Routes>

    </>
  )
}

export default App;