import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 p-5 flex flex-col space-y-4 min-h-screen">
      <img src="/logo.png" alt="Logo" className="w-28 mx-auto mb-6" />
      <Link to="/dashboard" className="hover:text-blue-400">🏠 Início</Link>
      <Link to="/veiculos" className="hover:text-blue-400">🚗 Veículos</Link>
      <Link to="/" className="hover:text-red-400 mt-auto">🔒 Sair</Link>
    </div>
  );
}
