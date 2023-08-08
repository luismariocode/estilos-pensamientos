import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar tus páginas aquí
import { Home, Nombre, Correo, Survey, Validacion, Thankyou } from './pages';


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nombre" element={<Nombre />} />
          <Route path="/correo" element={<Correo />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/validacion" element={<Validacion />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
