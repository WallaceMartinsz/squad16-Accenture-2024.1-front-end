import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login/Login'
import Navbar from './components/navbar/NavBar';
import { CadastroClientes } from './page/singin/CadastroClientes';
import { Lojas } from './page/Shoppins/Lojas';
import { Home } from './page/home/Home';
import { Produto } from './page/produto/Produto';
import { Carrinho } from './page/carrinho/Carrinho';
import { Pagamento } from './page/pagamento/Pagamento';
import { SelecionarCadastro } from './page/selecionarCadastro/SelecionarCadastro';
import { CadastroLojas } from './page/singin/CadastroLoja';
import { CadastroEntregadores } from './page/singin/CadastroEntregadores';
import MyProductsPage from './page/meusProdutos/meusProdutos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/cadastroClientes" Component={CadastroClientes} />
          <Route path="/cadastroLojas" Component={CadastroLojas} />
          <Route path="/cadastroEntregador" Component={CadastroEntregadores} />
          <Route path="/lojas" Component={Lojas} />
          <Route path="/" Component={Home} />
          <Route path='/meusProdutos' Component={MyProductsPage} />
          <Route path="/produtos" Component={Produto} />
          <Route path="/carrinho" Component={Carrinho} />
          <Route path="/pagamento" Component={Pagamento} />
          <Route path="/seleCad" Component={SelecionarCadastro} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
