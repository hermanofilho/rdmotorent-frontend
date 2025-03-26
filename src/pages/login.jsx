import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, senha });
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (err) {
      alert('Erro ao conectar');
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
      <img src="/logo.png" alt="Logo" className="w-40 mb-6" />
      <input type="text" placeholder="E-mail" className="mb-2 p-2 rounded bg-gray-800 w-72"
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" className="mb-4 p-2 rounded bg-gray-800 w-72"
        onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-600 px-6 py-2 rounded">Entrar</button>
    </div>
  );
}
