import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">Veículos Disponíveis: 12</div>
          <div className="bg-gray-800 p-4 rounded">Veículos Locados: 28</div>
          <div className="bg-gray-800 p-4 rounded">Faturamento do Mês: R$ 15.200</div>
          <div className="bg-gray-800 p-4 rounded">Manutenções Pendentes: 3</div>
        </div>
      </div>
    </div>
  );
}
