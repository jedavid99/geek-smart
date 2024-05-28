import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';
import { TablaUsuarios } from '../components/Config/UsuariosTabla';
import { AgregarUsuario } from '../components/Config/AgregarUsuario';


export const Configuracion = () => {
  return (
<div>
    
    <LayoutPrincipal >
        
    
    <TablaUsuarios></TablaUsuarios>
    <AgregarUsuario></AgregarUsuario>
    </LayoutPrincipal>
    </div>
  )
}
