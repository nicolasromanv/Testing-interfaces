import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Postular from './views/Postular';
import Index from './views/Index';
import Resultados from './views/Resultados';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/postular" element={<Postular />} />
          <Route exact path="/resultados" element={<Resultados />} />

        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
