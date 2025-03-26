import Sidebar from '../components/Sidebar';

export default function Configuracoes() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Configurações</h1>
        <div className="bg-gray-800 p-4 rounded space-y-2">
          <p>Botão do WhatsApp: <a href="https://wa.me/5583991265809" className="text-green-400 underline">+55 83 99126-5809</a></p>
          <p>Usuário logado: <strong>admin@rdmotors.com</strong></p>
        </div>
      </div>
    </div>
  );
}
