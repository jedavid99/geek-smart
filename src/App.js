//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Charp } from './components/home/charp';
import { Estadisticas } from './paginas/Estadisticas';
import { Proveedores } from './paginas/Proveedores';
import { Home } from './paginas/Home';
import { ListaTelefono } from './paginas/ListaTelefono';
import { ListaPC } from './paginas/ListaPc';
import { ListaOtros } from './paginas/ListaOtros';
import { Reportes } from './paginas/Reporte';
import { Empresa } from './paginas/Empresa';
import { UsuariosConfig } from './paginas/Usuarios';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/charp" element={<Charp/>}/>
          <Route exact path="/estadisticas" element={<Estadisticas/>}/>
          <Route exact path="/proveedores" element={<Proveedores/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/telefonos" element={<ListaTelefono/>}/>
          <Route exact path="/pc" element={<ListaPC/>}/>
          <Route exact path="/otros" element={<ListaOtros/>}/>
          <Route exact path="/reportes" element={<Reportes/>}/>
          <Route exact path="/empresa" element={<Empresa/>}/>
          <Route exact path="/usuarios" element={<UsuariosConfig/>}/>





        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
