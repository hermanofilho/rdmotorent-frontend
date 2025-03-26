import Sidebar from '../components/Sidebar';

export default function Veiculos() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Veículos</h1>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-center text-gray-400">Nenhum veículo cadastrado.</p>
        </div>
      </div>
    </div>
  );
}
