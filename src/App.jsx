import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Veiculos from './pages/Veiculos';
import Clientes from './pages/Clientes';
import Pagamentos from './pages/Pagamentos';
import Estoque from './pages/Estoque';
import Relatorios from './pages/Relatorios';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />

        {/* Rotas protegidas (em versão futura, protegidas por auth) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
