import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';
import { TablaUsuarios } from '../components/Config/UsuariosTabla';
import { ListaUsuario } from '../components/Config/ListaUsuario';
import { UsuariosLis } from '../components/Config/Usuarios/UsuariosLis';
import { AgregarUsuario } from '../components/Config/AgregarUsuario';
import { HomeOutlined, UserOutlined ,SettingFilled} from '@ant-design/icons';

import { Breadcrumb } from 'antd';



export const UsuariosConfig = () => {
  return (
<div>
    
    <LayoutPrincipal >
    <Breadcrumb
    items={[
      {
        href: '/home',
        title: <HomeOutlined />,
      },
      {
        
        title: (
          <>
            <SettingFilled />
            <span>Configuracion</span>
          </>
        ),
      },
      {
        title: 'Usuarios',
      },
    ]}
  />
    <UsuariosLis></UsuariosLis>
    <AgregarUsuario></AgregarUsuario>
    </LayoutPrincipal>
    
    </div>
  )
}
